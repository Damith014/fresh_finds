import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import NavigationMenu from "./Menu";
import { RootNavigation } from "./RootNavigation";
import HomeScreen from "../screens/HomeScreen";
import strings from "../constants/strings";
import colors from "../constants/colors";
import ProfileScreen from "../screens/ProfileScreen";
import ListScreen from "../screens/ListScreen";
import PostScreen from "../screens/PostScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootNavigation>();

function HomeScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: strings.home,
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: strings.profile,
        }}
      />
    </Stack.Navigator>
  );
}
function AdsScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Ads"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Ads"
        component={ListScreen}
        options={{
          title: strings.my_ads,
        }}
      />
    </Stack.Navigator>
  );
}
function FavoriteScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Favorite"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Favorite"
        component={ListScreen}
        options={{
          title: strings.favorite,
        }}
      />
    </Stack.Navigator>
  );
}
function NotificationScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Notification"
        component={PostScreen}
        options={{
          title: strings.notification,
        }}
      />
    </Stack.Navigator>
  );
}
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.inactive,
      }}
      drawerContent={(props: any) => <NavigationMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          drawerLabel: strings.home,
          drawerLabelStyle: {
            fontFamily: "NotoSansSinhala-Regular",
            color: colors.dark,
          },
          drawerIcon: ({ focused, size }) => (
            <Icon name="ios-home-sharp" size={20} color={colors.dark} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreenStack}
        options={{
          drawerLabel: strings.profile,
          drawerLabelStyle: {
            fontFamily: "NotoSansSinhala-Regular",
            color: colors.dark,
          },
          drawerIcon: ({ focused, size }) => (
            <Icon name="person-sharp" size={20} color={colors.dark} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ads"
        component={AdsScreenStack}
        options={{
          drawerLabel: strings.my_ads,
          drawerLabelStyle: {
            fontFamily: "NotoSansSinhala-Regular",
            color: colors.dark,
          },
          drawerIcon: ({ focused, size }) => (
            <Icon name="ios-newspaper-sharp" size={20} color={colors.dark} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreenStack}
        options={{
          drawerLabel: strings.favorite,
          drawerLabelStyle: {
            fontFamily: "NotoSansSinhala-Regular",
            color: colors.dark,
          },
          drawerIcon: ({ focused, size }) => (
            <Icon name="ios-bookmark" size={20} color={colors.dark} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreenStack}
        options={{
          drawerLabel: strings.notification,
          drawerLabelStyle: {
            fontFamily: "NotoSansSinhala-Regular",
            color: colors.dark,
          },
          drawerIcon: ({ focused, size }) => (
            <Icon name="ios-notifications" size={20} color={colors.dark} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
