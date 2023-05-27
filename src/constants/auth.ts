import AsyncStorage from "@react-native-async-storage/async-storage";
export async function handleUserStatus (){
  try {
    let isLogin = await AsyncStorage.getItem("is_login");
    if (isLogin != null) {
      return isLogin;
    } else {
      return "0";
    }
  } catch (error) {
    return "0";
  }
};
  