import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Alert, Image } from "react-native";
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
type profileScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function ProfileScreen(){
    const navigation = useNavigation<profileScreenProp>();
    const [isLogin, setLogin] = useState("0");
    const [account, setAccount] = useState<Account>();
    const [isLoading, setIsLoading] = useState(true);
    const [stat, setStat] = useState({post: 0, approve: 0, cancel: 0, reject: 0, finish: 0});
    useEffect(() => {
      setUserStatus().catch(error => {});
      async function setUserStatus() {
        let type = await handleUserStatus()
        setLogin(type)
        if (type != "0") {
          let user = await AsyncStorage.getItem("account");
          let account = JSON.parse(user ?? '') as Account;
          setAccount(account);
          let payload = {
            "user": account?.id
          }
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
              } else if ( value.status == "3") {
                finish = Number(value.total);
              }
            });
            setStat ({post: post, approve: approve, cancel: cancel, reject: reject, finish: finish});
          }
          setIsLoading(false)
        }
      }
    }, []);
    function callLogout () {
      Alert.alert(
        "Are your sure?",
        "Are you sure you want to logout?",
        [
          {
            text: "Yes",
            onPress: () => {
              AsyncStorage.clear();
              navigation.replace("Drawer");
            },
          },
          {
            text: "No",
            onPress:() =>{
              navigation.goBack();
            }
          },
        ]
      );
    }
    function clickLogin() {
      navigation.navigate('Mobile');
    }
    function clickSetting(type: string) {
      if (type == "logout") {
        callLogout()
      }
    }
    return(
      <View style={styles.container}>
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
            {isLogin != "0" &&
              <View style={styles.row_section}>
                <TouchableOpacity
                  onPress={() => clickSetting('logout')}
                  style={styles.back_button}
                >
                    <Icon name="log-out-outline" size={24} color={colors.dark} />
                </TouchableOpacity>
              </View>
            }
          </View>
        </View>
        {isLogin != "0" &&
          <View style={styles.profile_section}>
            <Image
              style={styles.image}
              source={require("../../assets/sample.png")}
            />
            <Text style={styles.name_header}>{account?.name}</Text>

            <View
              style={styles.rank_section}
            >
              <View style={{flex:1 ,flexDirection: 'column', alignItems:'center'}}>
                  <Text style={styles.value_header}>{stat.post}</Text>
                  <Text style={styles.title_header}>{strings.posted_ads}</Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={{flex:1 ,flexDirection: 'column', alignItems:'center'}}>
                  <Text style={styles.value_header}>{stat.approve + stat.finish}</Text>
                  <Text style={styles.title_header}>{strings.approve_ads}</Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={{flex:1 ,flexDirection: 'column', alignItems:'center'}}>
                  <Text style={styles.value_header}>{stat.cancel}</Text>
                  <Text style={styles.title_header}>{strings.cancel_ads}</Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={{flex:1 ,flexDirection: 'column', alignItems:'center'}}>
                  <Text style={styles.value_header}>{stat.reject}</Text>
                  <Text style={styles.title_header}>{strings.rejected_ads}</Text>
              </View>
            </View>
          </View>
        }
        {isLogin != "0" &&
          <View style={{margin:24}}>
            <Text style={styles.text_title_label}>{strings.name_}</Text>
            <Text style={styles.text_value_label}>{account?.name}</Text>
            <View style={{marginTop: 16}}></View>
            <Text style={styles.text_title_label}>{strings.mobile_title}</Text>
            <Text style={styles.text_value_label}>{account?.mobile}</Text>
            <View style={{marginTop: 16}}></View>
            <Text style={styles.text_title_label}>{strings.email_}</Text>
            <Text style={styles.text_value_label}></Text>
          </View>
        }
        {isLogin == "0" &&
            <LoginCard/>
          }
          {isLogin == "0" &&
            <View style={styles.button_section}>
              <Button
                label={strings.login}
                onPress={() => {
                  clickLogin();
                }}
                isActive={false}
              />
            </View>
          }
    </View>
    );
}
export default ProfileScreen;