import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Button from "../../../components/Button";
import { styles } from "./styles";
import colors from "../../../constants/colors";
import strings from "../../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import Service from "../../../service/Service";
import Spinner from "react-native-loading-spinner-overlay/lib";
type otpScreenProp = StackNavigationProp<RootNavigation, 'Auth'>;
function OTPScreen() {
  const navigation = useNavigation<otpScreenProp>();
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  const [counter, setCounter] = useState(60);
  const [pin_1, setPin1] = useState("");
  const [pin_2, setPin2] = useState("");
  const [pin_3, setPin3] = useState("");
  const [pin_4, setPin4] = useState("");
  const ref_pin1 = useRef<any>();
  const ref_pin2 = useRef<any>();
  const ref_pin3 = useRef<any>();
  const ref_pin4 = useRef<any>();
  const [error, setError] = useState({
    pin: false,
    message: ""
  });
  useEffect(() => {
    getMobile().catch(error => {});
    async function getMobile() {
      let mob = await AsyncStorage.getItem('mobile');
      setMobile(mob ?? '');
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);
  async function clickResend(){
    let payload = {
      "mobile" : `${mobile.replace(/\s/g, '')}`
    }
    setIsLoading(true);
      let response = await Service.otp(payload);
      if (response.status == "100") {
        setCounter(0);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
  }
  const navigate_register = async () => {
    if (pin_1.length == 1 && pin_2.length == 1 && pin_3.length == 1 && pin_4.length == 1) {
      setError({pin: false, message: ""});
      let payload = {
        "mobile" : `${mobile.replace(/\s/g, '')}`,
        "otp": pin_1 + pin_2 + pin_3 + pin_4
      }
      let validate = await Service.validate(payload);
      if (validate.status == "100") {
        setIsLoading(false);
        if ( validate.respond?.valid) {
          if (validate.respond?.registered) {
            if (0 < (validate.respond?.account ?? [])?.length){
              if (validate.respond.account![0].type == "1") {
                AsyncStorage.setItem("is_login", "1"); //User
              } else {
                AsyncStorage.setItem("is_login", "2"); //Admin
              }
              AsyncStorage.setItem("account",  JSON.stringify(validate.respond.account![0]));
              navigation.replace('Drawer');
            } else {
              navigation.navigate('Register');
            }
          } else {
            navigation.navigate('Register');
          }
        } else {
          setError({pin: true, message: "Invalid pin"});
        }
      } else {
        setIsLoading(false);
        setError({pin: true, message: "Invalid pin"});
      }
    } else {
      setError({pin: true, message: "Invalid pin"})
    }
  }
  function onChangePin(value: string, index: number) {
    if (index == 1) {
      if (value.length != 0) {
        setPin1(value);
        ref_pin2.current.focus();
      } else {
        setPin1("");
      }
    } else if (index == 2) { 
      if (value.length != 0) {
        setPin2(value);
        ref_pin3.current.focus();
      } else {
        setPin2("");
        ref_pin1.current.focus();
      }
    } else if (index == 3) { 
      if (value.length != 0) {
        setPin3(value);
        ref_pin4.current.focus();
      } else {
        setPin3("");
        ref_pin2.current.focus();
      }
    } else if (index == 4) { 
      if (value.length != 0) {
        setPin4(value);
      } else {
        setPin4("");
        ref_pin3.current.focus();
      }
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
            textContent={"Validating..."}
            textStyle={{ color: "#000" }}
          />
          <View style={styles.header_section}>
            <Text style={styles.header_label_section}>
              {strings.otp_header}
            </Text>
            <Text style={styles.header_label_mobile}>
              +{mobile}
            </Text>
          </View>
          <View style={styles.input_section}>
            <View style={error.pin ? styles.text_error_view : styles.otp_view}>
              <TextInput
                placeholder={"-"}
                value={pin_1}
                style={styles.text_otp}
                autoCapitalize="none"
                returnKeyType={"next"}
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(value) => onChangePin(value, 1)}
                keyboardType='numeric'
                maxLength={1}
                ref={ref_pin1}
                autoFocus
              />
            </View>
            <View style={error.pin ? styles.text_error_view : styles.otp_view}>
              <TextInput
                placeholder={"-"}
                value={pin_2}
                style={styles.text_otp}
                autoCapitalize="none"
                returnKeyType={"next"}
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(value) => onChangePin(value, 2)}
                keyboardType='numeric'
                maxLength={1}
                ref={ref_pin2}
              />
            </View>
            <View style={error.pin ? styles.text_error_view : styles.otp_view}>
              <TextInput
                placeholder={"-"}
                value={pin_3}
                style={styles.text_otp}
                autoCapitalize="none"
                returnKeyType={"next"}
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(value) => onChangePin(value, 3)}
                keyboardType='numeric'
                maxLength={1}
                ref={ref_pin3}
              />
            </View>
            <View style={error.pin ? styles.text_error_view : styles.otp_view}>
              <TextInput
                placeholder={"-"}
                value={pin_4}
                style={styles.text_otp}
                autoCapitalize="none"
                returnKeyType={"next"}
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(value) => onChangePin(value, 4)}
                keyboardType='numeric'
                maxLength={1}
                ref={ref_pin4}
              />
            </View>
          </View>

          {error.pin && <Text style={styles.text_error}>{error.message}</Text>}
          <View style={styles.label_section}>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={() => clickResend()} 
              disabled={counter == 0? false: true}>
                <Text style={counter == 0? styles.header_label_text: styles.header_label_text_opacity}>
                  {strings.otp_resend}
                </Text>
              </TouchableOpacity>
              {counter == 60 &&
                <Text style={styles.otp_label_section}> 01.00</Text> 
              }{counter != 60 && 9 < counter &&
                <Text style={styles.otp_label_section}> 00.{counter}</Text> 
              }{counter < 10 &&
                <Text style={styles.otp_label_section}> 00.0{counter}</Text> 
              }
            </View>
          </View>
          <View style={styles.button_section}>
            <Button
              label={strings.next_button}
              onPress={() => navigate_register()}
              isActive={false}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default OTPScreen;