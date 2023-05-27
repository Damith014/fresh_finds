import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootNavigation } from './src/navigations/RootNavigation';
import RootStack from './src/navigations/RootStack';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import DetailsScreen from './src/screens/DetailsScreen';
import PostScreen from './src/screens/PostScreen';
import SearchScreen from './src/screens/SearchScreen';
const Stack = createStackNavigator<RootNavigation>();
function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mobile"
            component={RootStack.LoginStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTP"
            component={RootStack.OTPStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RootStack.RegisterStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Post"
            component={PostScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Search'
            component={SearchScreen}
            options={{headerShown: false}}
          />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;