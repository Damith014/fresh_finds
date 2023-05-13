import React from "react";
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

type otpScreenProp = StackNavigationProp<RootNavigation, 'Auth'>;

function OTPScreen() {
  const navigation = useNavigation<otpScreenProp>();
  const navigate_register = async () => {
    navigation.navigate('Register');
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
          <View style={styles.header_section}>
            <Text style={styles.header_label_section}>
              {strings.otp_header}
            </Text>
            <Text style={styles.header_label_mobile}>
              +94 71 599 2537
            </Text>
          </View>
          <View style={styles.input_section}>
            <TextField
              placeholder={"-"}
              isEmpty={true}
              isError={false}
              error={""}
              isText={false}
              value={""}
              onChange={(value) => undefined} 
              isOtp={true}
              />
            <TextField
              placeholder={"-"}
              isEmpty={true}
              isError={false}
              error={""}
              value={""}
              onChange={(value) => undefined}
              isOtp={true}
            />
            <TextField
              placeholder={"-"}
              isEmpty={true}
              isError={false}
              error={""}
              value={""}
              onChange={(value) => undefined} 
              isOtp={true}
              />
            <TextField
              placeholder={"-"}
              isEmpty={true}
              isError={false}
              error={""}
              value={""}
              onChange={(value) => undefined}
              isOtp={true}
            />
          </View>
          <View style={styles.label_section}>
            <Text style={styles.otp_label_section}>{strings.otp_resend_label}</Text>
            <TouchableOpacity onPress={() => undefined}>
              <Text style={styles.header_label_text}>{strings.otp_resend}</Text>
            </TouchableOpacity>
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
