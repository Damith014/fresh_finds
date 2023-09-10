import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import { styles } from "./styles";
import colors from "../../../constants/colors";
import strings from "../../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../../navigations/RootNavigation";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useNavigation } from "@react-navigation/native";
import Service from "../../../service/Service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';
type registerScreenProp = StackNavigationProp<RootNavigation, 'Auth'>;
function RegisterScreen() {
  const navigation = useNavigation<registerScreenProp>();
  const [data, setData] = useState({name:'', email:''});
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  useEffect(() => {
    getMobile().catch(error => {});
    async function getMobile() {
      let mob = await AsyncStorage.getItem('mobile');
      setMobile(mob ?? '');
    }
  }, []);
  async function clickRegister(){
    let is_error = false
    if (data.name == "") {
      is_error = true;
    }
    if (!is_error) {
      // let token = await messaging().getToken();
      let payload = {
        "name" : data.name,
        "email": data.email,
        "mobile": `${mobile.replace(/\s/g, '')}`,
        "token": 'token'
      }
      setIsLoading(true);
      let response = await Service.register(payload);
      if (response.status == "100") {
        setIsLoading(false);
        if ( response.respond?.valid) {
          if (response.respond?.registered) {
            if (0 < (response.respond?.account ?? [])?.length){
              if (response.respond.account![0].type == "1") {
                AsyncStorage.setItem("is_login", "1"); //User
              } else {
                AsyncStorage.setItem("is_login", "2"); //Admin
              }
              AsyncStorage.setItem("account",  JSON.stringify(response.respond.account![0]));
              navigation.replace('Drawer');
            } else {
              AsyncStorage.setItem("is_login", "1"); //User
              navigation.navigate('Register');
            }
          } else {
            AsyncStorage.setItem("is_login", "1"); //User
            navigation.navigate('Register');
          }
        } else {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  }
  return (
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={{ flex: 1, backgroundColor: colors.primay }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back_button}>
          <Icon name="arrow-back-outline" size={30} color={colors.dark} />
          </TouchableOpacity>
          <Spinner
            visible={isLoading}
            textContent={"Loading..."}
            textStyle={{ color: "#000" }}
          />
        <View style={styles.header_section}>
            <Text style={styles.header_label_section}>
              {strings.register_header}
            </Text>
          </View>
          <View style={styles.input_section}>
            <Text style={styles.text_title}>{strings.name}*</Text>
            <TextField
              placeholder={strings.name}
              isEmpty={data.name == ""? true: false}
              isError={data.name == ""? true: false}
              error={strings.required}
              isText={true}
              value={data.name}   
              onChange={(value) => setData({...data,name: value})}
            />
          </View>
          <View style={styles.input_section}>
            <Text style={styles.text_title}>{strings.email}</Text>
            <TextField
              placeholder={strings.email}
              isEmpty={true}
              isError={false}
              isOtp={false}    
              error={""}
              isText={true}
              value={data.email}
              onChange={(value) => setData({...data,email: value})}
            />
          </View>
          <View style={styles.button_section}>
            <Button
              label={strings.done_button}
              onPress={() => clickRegister()}
              isActive={false}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default RegisterScreen;