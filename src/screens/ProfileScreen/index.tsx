import React, { useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styles } from "./styles";
import TextField from "../../components/TextField";
import strings from "../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

type profileScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function ProfileScreen(){
    const navigation = useNavigation<profileScreenProp>();
    return(
        <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={{ flex: 1, backgroundColor: colors.primay }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menu_button}
        >
          <Icon name="menu-outline" size={30} color={colors.menu} />
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
              label={strings.logout_button}
              onPress={() => undefined}
              isActive={false}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}
export default ProfileScreen;