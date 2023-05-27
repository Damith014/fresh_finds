import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import OTPScreen from "../screens/Auth/OTPScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
const Stack = createStackNavigator();
function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function OTPStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function RegisterStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const RootStack = {
  LoginStack,
  OTPStack,
  RegisterStack
};

export default RootStack;
