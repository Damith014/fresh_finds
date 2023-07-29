import React, { useEffect, useState,useRef } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  PermissionsAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styles } from "./styles";
import strings from "../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { handleUserStatus } from "../../constants/auth";
import { Account } from "../../constants/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginCard from "../../components/Cards/LoginCard";
import Service from "../../service/Service";
import Spinner from "react-native-loading-spinner-overlay/lib";
import TextField from "../../components/TextField";
import ActionSheet from "react-native-actionsheet";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
type profileScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function ProfileScreen() {
  const navigation = useNavigation<profileScreenProp>();
  const [isLogin, setLogin] = useState("0");
  const [account, setAccount] = useState<Account>();
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [filePath, setFilePath] = useState<any>();
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<any>();
  let actionSheet = useRef<any>();
  let optionArray = ["Camera", "Photo & Video Libary", "Cancel"];
  const [stat, setStat] = useState({
    post: 0,
    approve: 0,
    cancel: 0,
    reject: 0,
    finish: 0,
  });
  useEffect(() => {
    setUserStatus().catch((error) => {});
    async function setUserStatus() {
      let type = await handleUserStatus();
      setLogin(type);
      if (type != "0") {
        let user = await AsyncStorage.getItem("account");
        if (user != null) {
          setIsLoading(true);
          let account = JSON.parse(user ?? "") as Account;
          setAccount(account);
          let payload = {
            user: account?.id,
          };
          //0-pending, 1-approved, 2-rejected, 3-finish, 4-cancel
          let profile_stat = await Service.profile(payload);
          if (profile_stat.status == "100") {
            let post = 0;
            let approve = 0;
            let cancel = 0;
            let reject = 0;
            let finish = 0;
            profile_stat?.respond?.forEach(function (value) {
              post += Number(value.total);
              if (value.status == "1") {
                approve = Number(value.total);
              } else if (value.status == "4") {
                cancel = Number(value.total);
              } else if (value.status == "2") {
                reject = Number(value.total);
              } else if (value.status == "3") {
                finish = Number(value.total);
              }
            });
            setStat({
              post: post,
              approve: approve,
              cancel: cancel,
              reject: reject,
              finish: finish,
            });
          }
        }
        setIsLoading(false);
      }
    }
  }, []);
  function callLogout() {
    Alert.alert("Are your sure?", "Are you sure you want to logout?", [
      {
        text: "Yes",
        onPress: () => {
          AsyncStorage.clear();
          navigation.replace("Drawer");
        },
      },
      {
        text: "No",
        onPress: () => {
          navigation.goBack();
        },
      },
    ]);
  }
  function clickLogin() {
    navigation.navigate("Mobile");
  }
  function clickSetting(type: string) {
    if (type == "logout") {
      callLogout();
    }
  }
  function clickEdit() {
    setEdit(true);
  }

  function clickUpload() {
    actionSheet.current.show();
  }
  async function openImage(index: number) {
    if (index == 0) {
      let options = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
        saveToPhotos: true,
      };
      let isCameraPermitted = await requestCameraPermission();
      let isStoragePermitted = await requestExternalWritePermission();
      if (isCameraPermitted && isStoragePermitted) {
        launchCamera(options, (response) => {
          if (0 < (response.assets ?? []).length) {
            let asset = response.assets![0].uri
            fileUpload(asset);
            setFilePath(asset);
          }
        });
      }
    } else if (index == 1) {
      let options = {
        mediaType: "photo",
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      };
      launchImageLibrary(options, (response) => {
        if (0 < (response.assets ?? []).length) {
          let asset = response.assets![0].uri
          fileUpload(asset);
          setFilePath(asset);
        }
      });
    }
  }
  async function fileUpload(file: any) {
    setIsLoading(true);
    setTimeout(function callback(){
      setIsLoading(false);
    },1000);
    const payload = new FormData();
    payload.append('file', {
      uri: file,
      name: 'image.jpg',
      type: 'image/jpeg',
    });
    let file_response = await Service.upload(payload);
    if (file_response?.status == "success") {
      setImage(file_response.users);
    }
    setIsLoading(false);
  }

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs camera permission",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
  const requestExternalWritePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "External Storage Write Permission",
            message: "App needs write permission",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
      }
      return false;
    } else return true;
  };
  async function clickUpdate() {
    let is_error = false;
    if (email == "") {
      is_error = true;
    }
    console.log(is_error);
    if (!is_error) {
      let payload = {
        name: account?.name,
        email: email,
        user: account?.id,
        image: image
      };
      setIsLoading(true);
      let response = await Service.update(payload);
      console.log(response);
      if (response.status == "100") {
        setEdit(false);
      }
      setIsLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row_section}>
          <Spinner
            visible={isLoading}
            textContent={"Loading..."}
            textStyle={{ color: "#000" }}
          />
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.menu_button}
          >
            <Icon name="menu-outline" size={30} color={colors.menu} />
          </TouchableOpacity>
          <Text style={styles.text_head}>{strings.profile}</Text>
          <View style={styles.search_section}>
            {isLogin != "0" && (
              <View style={styles.row_section}>
                {!edit && (
                  <TouchableOpacity
                    onPress={() => clickEdit()}
                    style={styles.back_button}
                  >
                    <Icon name="build-outline" size={24} color={colors.dark} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={() => clickSetting("logout")}
                  style={styles.back_button}
                >
                  <Icon name="log-out-outline" size={24} color={colors.dark} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <ActionSheet
            ref={actionSheet}
            title={"Select Image"}
            options={optionArray}
            cancelButtonIndex={2}
            onPress={(index) => {
              openImage(index);
            }}
          />
        </View>
        {isLogin != "0" && (
          <View style={styles.profile_section}>
            <Image
              style={styles.image}
              source= {filePath != undefined ? {uri:`${filePath}`} : (account?.image == "" || account?.image == undefined ? require("../../assets/sample.png") : {uri:`http://sigirisoft.lk/fresh_backend/upload/${account?.image}`})}
            />
            {edit &&
            <TouchableOpacity
                  onPress={() => clickUpload()}
                  style={{backgroundColor:'rgba(52, 52, 52, 0.8)',padding:4,borderRadius:8,marginTop:-35}}
                >
            <Icon name="camera" size={20} color={colors.light_gray}/>
            </TouchableOpacity>
}
            <Text style={styles.name_header}>{account?.name}</Text>

            <View style={styles.rank_section}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={styles.value_header}>{stat.post}</Text>
                <Text style={styles.title_header}>{strings.posted_ads}</Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={styles.value_header}>
                  {stat.approve + stat.finish}
                </Text>
                <Text style={styles.title_header}>{strings.approve_ads}</Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={styles.value_header}>{stat.cancel}</Text>
                <Text style={styles.title_header}>{strings.cancel_ads}</Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={styles.value_header}>{stat.reject}</Text>
                <Text style={styles.title_header}>{strings.rejected_ads}</Text>
              </View>
            </View>
          </View>
        )}
        {isLogin != "0" && (
          <View style={{ margin: 24 }}>
            <Text style={styles.text_title_label}>{strings.name_}</Text>
            <Text style={styles.text_value_label}>{account?.name}</Text>
            <View style={{ marginTop: 16 }}></View>
            <Text style={styles.text_title_label}>{strings.mobile_title}</Text>
            <Text style={styles.text_value_label}>{account?.mobile}</Text>
            <View style={{ marginTop: 16 }}></View>
            <Text style={styles.text_title_label}>{strings.email_}</Text>
            {edit ? (
              <View style={{ marginBottom: 10, marginTop: 10 }}>
                <TextField
                  placeholder={strings.email}
                  isEmpty={true}
                  isError={false}
                  isOtp={false}
                  error={""}
                  isText={true}
                  value={email}
                  onChange={(value) => setEmail(value)}
                />
              </View>
            ) : (
              <Text style={styles.text_value_label}>{email == "" ? account?.email : email}</Text>
            )}
            {edit && (
              <Button
                label={strings.edit_button}
                onPress={() => clickUpdate()}
                isActive={false}
              />
            )}
          </View>
        )}
        {isLogin == "0" && <LoginCard />}
        {isLogin == "0" && (
          <View style={styles.button_section}>
            <Button
              label={strings.login}
              onPress={() => {
                clickLogin();
              }}
              isActive={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
export default ProfileScreen;
