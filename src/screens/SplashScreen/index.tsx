import React, { useEffect, useState } from "react";
import { View, Image, ActivityIndicator, Text } from "react-native";
import { styles } from "./styles";
import strings from "../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";

type splashScreenProp = StackNavigationProp<RootNavigation, 'Auth'>;
function SplashScreen() {
  const navigation = useNavigation<splashScreenProp>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Mobile");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{strings.app_name}</Text>
    </View>
  );
}

export default SplashScreen;
