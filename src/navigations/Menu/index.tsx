import React from "react";
import { SafeAreaView, Image, View, Alert } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { styles } from "./styles";
const logo = require('../../assets/logo/logo.png')

const NavigationMenu = (props: any) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={logo} style={styles.sideMenuProfileIcon} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
export default NavigationMenu;
