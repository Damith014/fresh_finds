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

type loginScreenProp = StackNavigationProp<RootNavigation, 'Auth'>;
function LoginScreen() {
  const navigation = useNavigation<loginScreenProp>();
  const navigate_otp = async () => {
    navigation.navigate('OTP');
  }
  const navigate_back = async () => {
    navigation.goBack();
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
          {/* <Icon name="arrow-back-outline" size={30} color={colors.dark} /> */}
          </TouchableOpacity>

          <View style={styles.header_section}>
            <Text style={styles.header_label_section}>
              {strings.mobile_header}
            </Text>
          </View>
          <View style={styles.input_section}>
            <Text style={styles.text_title}>{strings.mobile_title}</Text>
            <TextField
              placeholder={strings.mobile_placeholder}
              error={""}
              isEmpty={true}
              value={""}
              onChange={(value) => undefined}
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
