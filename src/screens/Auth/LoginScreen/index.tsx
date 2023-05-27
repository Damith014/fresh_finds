import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
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
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Service from "../../../service/Service";
import Spinner from "react-native-loading-spinner-overlay/lib";
type loginScreenProp = StackNavigationProp<RootNavigation, 'Auth'>;
function LoginScreen() {
  const navigation = useNavigation<loginScreenProp>();
  const regex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    mobile: false,
    mobile_messsage: ""
  });
  const navigate_otp = async () => {
    if (mobile.match(regex)){
      AsyncStorage.setItem('mobile', `94 ${mobile}`);
      let payload = {
        "mobile" : `94${mobile}`
      }
      setIsLoading(true);
      let response = await Service.otp(payload);
      if (response.status == "100") {
        setIsLoading(false);
        navigation.navigate('OTP');
      } else {
        setIsLoading(false);
      }
    } else {
      setError({
        mobile: true,
        mobile_messsage: "Please enter a valid phone number."
      });
    }
  }
  function onChangeMobile(value: string) {
    if (value.length != 0) {
      setMobile(value);
    } else {
      setMobile("");
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
            textContent={"Requesting..."}
            textStyle={{ color: "#000" }}
          />
          <View style={styles.header_section}>
            <Text style={styles.header_label_section}>
              {strings.mobile_header}
            </Text>
          </View>
          <View style={styles.input_section}>
            <Text style={styles.text_title}>{strings.mobile_title}</Text>
            <TextField
              placeholder={strings.mobile_placeholder}
              isError={error.mobile}
              error={error.mobile_messsage}
              isEmpty={false}
              value={mobile}
              onChange={(value) => onChangeMobile(value)}
              isContry={true}
            />
          </View>
          <View style={styles.button_section}>
            <Button
              label={strings.next_button}
              onPress={() => navigate_otp()}
              isActive={false}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
