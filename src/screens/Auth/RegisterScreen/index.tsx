import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
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

type registerScreenProp = StackNavigationProp<RootNavigation, 'Auth'>;

function RegisterScreen() {
  const navigation = useNavigation<registerScreenProp>();
  const navigate_home = async () => {
    navigation.navigate('Drawer');
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
              {strings.register_header}
            </Text>
          </View>
          <View style={styles.input_section}>
            <Text style={styles.text_title}>{strings.name}</Text>
            <TextField
              placeholder={strings.name}
              isEmpty={true}
              isError={false}
              error={""}
              isText={true}
              value={""}   
              onChange={(value) => undefined}
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
              value={""}
              onChange={(value) => undefined}
            />
          </View>
          <View style={styles.button_section}>
            <Button
              label={strings.done_button}
              onPress={() => navigate_home()}
              isActive={false}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
