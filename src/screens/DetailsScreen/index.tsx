import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button";
import { styles } from "./styles";
import colors from "../../constants/colors";
import strings from "../../constants/strings";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootNavigation } from "../../navigations/RootNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import moment from "moment";
import { decode } from "html-entities";
import Swiper from "react-native-swiper";
import { handleUserStatus } from "../../constants/auth";
import Service from "../../service/Service";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Account } from "../../constants/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
type detailsScreenProp = StackNavigationProp<RootNavigation, "Details">;
type detailsScreenRouteProp = RouteProp<RootNavigation, "Details">;
function DetailsScreen() {
  const route = useRoute<detailsScreenRouteProp>();
  const navigation = useNavigation<detailsScreenProp>();
  const [user, setUser] = useState<any>('');
  const [favorite, setFavorite] = useState<any>(false);
  const [isLogin, setLogin] = useState("0");
  const [account, setAccount] = useState("");
  const [edit, setEdit] = useState(false);
  const regex = /පොල්/g;
  const regex1 = /පොල් තෙල්/g;
  const regex2 = /Dc පොල්/g;
  const regex3 = /පොල්තෙල්/g;
  const item = route.params.item;
  const isManage = route.params.isMange;
  let images_ = item?.images.split(",") ?? [];
  const [images, setImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [districts] = useState([
    { label: "කොළඹ", value: "1" },
    { label: "නුවර", value: "2" },
    { label: "ගාල්ල", value: "3" },
    { label: "අම්පාර", value: "4" },
    { label: "අනුරාධපුර", value: "5" },
    { label: "බදුල්ල", value: "6" },
    { label: "මඩකලපුව", value: "7" },
    { label: "ගම්පහ", value: "8" },
    { label: "හම්බන්තොට", value: "9" },
    { label: "යාපනය", value: "10" },
    { label: "කළුතර", value: "11" },
    { label: "කෑගල්ල", value: "12" },
    { label: "කිලිනොච්චිය", value: "13" },
    { label: "කුරුණෑගල", value: "14" },
    { label: "මන්නාරම", value: "15" },
    { label: "මාතලේ", value: "16" },
    { label: "මාතර", value: "17" },
    { label: "මොණරාගල", value: "18" },
    { label: "මුලතිව්", value: "19" },
    { label: "නුවරඑලිය", value: "20" },
    { label: "පොලොන්නරුව", value: "21" },
    { label: "පුත්තලම", value: "22" },
    { label: "රත්නපුර", value: "23" },
    { label: "ත්‍රිකුණාමලය", value: "24" },
    { label: "වවුනියාව", value: "25" },
  ]);
  const [cities] = useState([
    { label: "පිළියන්දල", value: "1-1" },
    { label: "නුගේගොඩ", value: "1-2" },
    { label: "මහරගම", value: "1-3" },
    { label: "දෙහිවල", value: "1-4" },
    { label: "කොට්ටාව", value: "1-5" },
    { label: "මාලබේ", value: "1-6" },
    { label: "මොරටුව", value: "1-7" },
    { label: "බොරලෙස්ගමුව", value: "1-8" },
    { label: "බත්තරමුල්ල", value: "1-9" },
    { label: "හෝමාගම", value: "1-10" },
    { label: "කඩුවෙල", value: "1-11" },
    { label: "අතුරුගිරිය", value: "1-12" },
    { label: "රාජගිරිය", value: "1-13" },
    { label: "තලවතුගොඩ", value: "1-14" },
    { label: "වැල්ලම්පිටිය", value: "1-15" },
    { label: "කෝට්ටේ", value: "1-16" },
    { label: "පන්නිපිටිය", value: "1-17" },
    { label: "ගල්කිස්ස", value: "1-18" },
    { label: "රත්මලාන", value: "1-19" },
    { label: "කොහුවල", value: "1-20" },
    { label: "අංගොඩ", value: "1-21" },
    { label: "මීගොඩ", value: "1-22" },
    { label: "කොලොන්නාව", value: "1-23" },
    { label: "නාවල", value: "1-24" },
    { label: "කැස්බෑව", value: "1-25" },
    { label: "පාදුක්ක", value: "1-26" },
    { label: "අවිස්සාවේල්ල", value: "1-27" },
    { label: "හංවැල්ල", value: "1-28" },
    { label: "ගොඩගම", value: "1-29" },
    { label: "කොළඹ 1", value: "1-30" },
    { label: "කොළඹ 2", value: "1-31" },
    { label: "කොළඹ 3", value: "1-32" },
    { label: "කොළඹ 4", value: "1-33" },
    { label: "කොළඹ 5", value: "1-34" },
    { label: "කොළඹ 6", value: "1-35" },
    { label: "කොළඹ 7", value: "1-36" },
    { label: "කොළඹ 8", value: "1-37" },
    { label: "කොළඹ 9", value: "1-38" },
    { label: "කොළඹ 10", value: "1-39" },
    { label: "කොළඹ 11", value: "1-40" },
    { label: "කොළඹ 12", value: "1-41" },
    { label: "කොළඹ 13", value: "1-42" },
    { label: "කොළඹ 14", value: "1-43" },
    { label: "කොළඹ 15", value: "1-44" },
    { label: "මහනුවර නගරය", value: "2-1" },
    { label: "කටුගස්තොට", value: "2-2" },
    { label: "ගම්පොල", value: "2-3" },
    { label: "පේරාදෙණිය", value: "2-4" },
    { label: "අකුරණ", value: "2-5" },
    { label: "පිළිමතලාව", value: "2-6" },
    { label: "දිගන", value: "2-7" },
    { label: "ගෙලිඔය", value: "2-8" },
    { label: "කුණ්ඩසාලේ", value: "2-9" },
    { label: "නාවලපිටිය", value: "2-10" },
    { label: "ගලගෙදර", value: "2-11" },
    { label: "කඩුගන්නාව", value: "2-12" },
    { label: "මඩවල බසාර්", value: "2-13" },
    { label: "වත්තේගම", value: "2-14" },
    { label: "අම්පිටිය", value: "2-15" },
    { label: "මැණික්හින්න", value: "2-16" },
    { label: "ගාල්ල නගරය", value: "3-1" },
    { label: "අම්බලන්ගොඩ", value: "3-2" },
    { label: "ඇල්පිටිය", value: "3-3" },
    { label: "බද්දේගම", value: "3-4" },
    { label: "හික්කඩුව", value: "3-5" },
    { label: "කරාපිටිය", value: "3-6" },
    { label: "බෙන්තොට", value: "3-7" },
    { label: "අහංගම", value: "3-8" },
    { label: "බටපොල", value: "3-9" },
    { label: "අක්කරෙපත්තු", value: "4-1" },
    { label: "කල්මුනෛ", value: "4-2" },
    { label: "අම්පාර නගරය", value: "4-3" },
    { label: "සෛන්තමරුතු", value: "4-4" },
    { label: "අනුරාධපුර නගරය", value: "5-1" },
    { label: "කැකිරාව", value: "5-2" },
    { label: "මැදවච්චිය", value: "5-3" },
    { label: "තඹුත්තේගම", value: "5-4" },
    { label: "එප්පාවල", value: "5-5" },
    { label: "නොච්චියාගම", value: "5-6" },
    { label: "මිහින්තලේ", value: "5-7" },
    { label: "ගල්නෑව", value: "5-8" },
    { label: "තලාව", value: "5-9" },
    { label: "ගලෙන්බින්දුනුවැව", value: "5-10" },
    { label: "හබරණ", value: "5-11" },
    { label: "බදුල්ල නගරය", value: "6-1" },
    { label: "බණ්ඩාරවෙල", value: "6-2" },
    { label: "වැලිමඩ", value: "6-3" },
    { label: "මහියංගනය", value: "6-4" },
    { label: "පස්සර", value: "6-5" },
    { label: "හාලි ඇල", value: "6-6" },
    { label: "දියතලාව", value: "6-7" },
    { label: "ඇල්ල", value: "6-8" },
    { label: "හපුතලේ", value: "6-9" },
    { label: "මඩකලපුව නගරය", value: "7-1" },
    { label: "ගම්පහ නගරය", value: "8-1" },
    { label: "මීගමුව", value: "8-2" },
    { label: "වත්තල", value: "8-3" },
    { label: "කඩවත", value: "8-4" },
    { label: "කිරිබත්ගොඩ", value: "8-5" },
    { label: "කැලණිය", value: "8-6" },
    { label: "ජා-එල", value: "8-7" },
    { label: "නිට්ටඹුව", value: "8-8" },
    { label: "මිනුවන්ගොඩ", value: "8-9" },
    { label: "රාගම", value: "8-10" },
    { label: "දෙල්ගොඩ", value: "8-11" },
    { label: "කටුනායක", value: "8-12" },
    { label: "කදාන", value: "8-13" },
    { label: "වේයන්ගොඩ", value: "8-14" },
    { label: "සිදුව", value: "8-15" },
    { label: "ගනේමුල්ල", value: "8-16" },
    { label: "දිවුලපිටිය", value: "8-16" },
    { label: "මීරිගම", value: "8-18" },
    { label: "තංගල්ල", value: "9-1" },
    { label: "බෙලිඅත්ත", value: "9-2" },
    { label: "හම්බන්තොට නගරය", value: "9-3" },
    { label: "අම්බලන්තොට", value: "9-4" },
    { label: "තිස්සමහාරාම", value: "9-5" },
    { label: "යාපනය නගරය", value: "10-1" },
    { label: "නල්ලුර්", value: "10-2" },
    { label: "චාවකච්චේරි", value: "10-3" },
    { label: "කළුතර නගරය", value: "11-1" },
    { label: "පානදුර", value: "11-2" },
    { label: "හොරණ", value: "11-3" },
    { label: "බණ්ඩාරගම", value: "11-4" },
    { label: "මතුගම", value: "11-5" },
    { label: "අලුත්ගම", value: "11-6" },
    { label: "වාද්දුව", value: "11-7" },
    { label: "බේරුවල", value: "11-8" },
    { label: "ඉංගිරිය", value: "11-9" },
    { label: "කෑගල්ල නගරය", value: "12-1" },
    { label: "මාවනැල්ල", value: "12-2" },
    { label: "වරකාපොල", value: "12-3" },
    { label: "රුවන්වැල්ල", value: "12-4" },
    { label: "රඹුක්කන", value: "12-5" },
    { label: "ගලිගමුව", value: "12-6" },
    { label: "දෙහිඕවිට", value: "12-7" },
    { label: "යටියන්තොට", value: "12-8" },
    { label: "දෙරනියගල", value: "12-9" },
    { label: "කිතුල්ගල", value: "12-10" },
    { label: "කිලිනොච්චිය නගරය", value: "13-1" },
    { label: "කුරුණෑගල නගරය", value: "14-1" },
    { label: "කුලියාපිටිය", value: "14-2" },
    { label: "වාරියපොළ", value: "14-3" },
    { label: "නාරම්මල", value: "14-4" },
    { label: "ඉබ්බාගමුව", value: "14-5" },
    { label: "පන්නල", value: "14-6" },
    { label: "මාවතගම", value: "14-7" },
    { label: "පොල්ගහවෙල", value: "14-8" },
    { label: "නිකවැරටිය", value: "14-9" },
    { label: "බින්ගිරිය", value: "14-10" },
    { label: "ගිරිඋල්ල", value: "14-11" },
    { label: "හෙට්ටිපොළ", value: "14-12" },
    { label: "ගල්ගමුව", value: "14-13" },
    { label: "අලව්ව", value: "14-14" },
    { label: "මන්නාරම නගරය", value: "15-1" },
    { label: "මාතලේ නගරය", value: "16-1" },
    { label: "දඹුල්ල", value: "16-2" },
    { label: "ගලේවෙල", value: "16-3" },
    { label: "උකුවෙල", value: "16-4" },
    { label: "පලාපත්වෙල", value: "16-5" },
    { label: "රත්තොට", value: "16-6" },
    { label: "පල්ලෙපොල", value: "16-7" },
    { label: "වත්ත", value: "16-8" },
    { label: "සීගිරිය", value: "16-9" },
    { label: "මාතර නගරය", value: "17-1" },
    { label: "අකුරැස්ස", value: "17-2" },
    { label: "වැලිගම", value: "17-3" },
    { label: "හක්මන", value: "17-4" },
    { label: "කඹුරුපිටිය", value: "17-5" },
    { label: "දික්වැල්ල", value: "17-6" },
    { label: "දෙනියාය", value: "17-7" },
    { label: "කෙකනදුර", value: "17-8" },
    { label: "කඹුරුගමුව", value: "17-9" },
    { label: "ගන්දර", value: "17-10" },
    { label: "මොනරාගල නගරය", value: "18-1" },
    { label: "වැල්ලවාය", value: "18-2" },
    { label: "බිබිලේ", value: "18-3" },
    { label: "බුත්තල", value: "18-4" },
    { label: "කතරගම", value: "18-5" },
    { label: "මුලතිව් නගරය", value: "19-1" },
    { label: "නුවරඑළිය නගරය", value: "20-1" },
    { label: "හැටන්", value: "20-2" },
    { label: "ගිනිගත්තේන", value: "20-3" },
    { label: "මඩුල්ල", value: "20-4" },
    { label: "පොළොන්නරුව නගරය", value: "21-1" },
    { label: "කදුරුවෙල", value: "21-2" },
    { label: "හිඟුරක්ගොඩ", value: "21-3" },
    { label: "මැදිරිගිරිය", value: "21-4" },
    { label: "භලාවත", value: "22-1" },
    { label: "පුත්තලම නගරය", value: "22-2" },
    { label: "වෙන්නප්පුව", value: "22-3" },
    { label: "නාත්තන්ඩිය", value: "22-4" },
    { label: "මාරවිල", value: "22-5" },
    { label: "දන්කොටුව", value: "22-6" },
    { label: "ආනමඩුව", value: "22-7" },
    { label: "රත්නපුර නගරය", value: "23-1" },
    { label: "ඇඹිලිපිටිය", value: "23-2" },
    { label: "බලන්ගොඩ", value: "23-3" },
    { label: "පැල්මඩුල්ල", value: "23-4" },
    { label: "ඇහැලියගොඩ", value: "23-5" },
    { label: "කුරුවිට", value: "23-6" },
    { label: "ත්‍රිකුණාමලය නගරය", value: "24-1" },
    { label: "කින්නියා", value: "24-2" },
    { label: "වවුනියාව නගරය", value: "25" },
  ]);
  useEffect(() => {
    loadImages();
    setUserStatus().catch(error => {});
    async function setUserStatus() {
      let type = await handleUserStatus()
      setIsLoading(true);
      setLogin(type)
      let payload = {
        "user_id" : item?.user_id
      }
      let user_response = await Service.user(payload);
      if (user_response.status == "100") {
        if (user_response.users != null && 0 < (user_response.users).length) {
          setUser(user_response.users![0])
        }
      }
      let user = await AsyncStorage.getItem("account");
      if (user != null) {
        let account = JSON.parse(user ?? '') as Account;
        setAccount(account.id);
        let data = {
          "user" : account.id
        }
        let fovorite_response = await Service.getfavorite(data);
        if (fovorite_response.status == "100") {
          fovorite_response?.respond?.forEach(function (value) {
            if (value.item == item?.id) {
              setFavorite(true);
            }
          });
        }
      }
      setIsLoading(false);
    }
  }, []);
  function loadImages() {
    let images: { img: string; name: string }[] = [];
    images_.map((img) =>
      images.push({
        img: `http://sigirisoft.lk/fresh_backend/upload/${img}`,
        name: img,
      })
    );
    setImages(images);
  }
  function makeACall() {
    Linking.openURL(`tel:+${user.mobile}`);
  }
  async function clickFavorite(favorite: boolean) {
    let payload = {
      "user" : account,
      "item": item?.id,
      "status": favorite? 0 : 1

    }
    await Service.favorite(payload);
    setFavorite(favorite);
  }
  function goBack() {
    route.params.callBack();
    navigation.goBack();
  }
  async function clickChangeStatus(status: number){
    setIsLoading(true);
    let payload = {
      "item": item?.id,
      "status": status,

    }
    let response = await Service.approve(payload);
    if (response.status == "100") {
      setIsLoading(false);
      route.params.callBack()
      navigation.goBack();
    } else {
      setIsLoading(false);
    }
  }
  function getLocation(location: string)  {
    var splitted = location.split("-");
    var dist = ""
    var city = ""
    districts.forEach( (item) => {
      if (item.value == splitted[0]) {
        dist = item.label
      }
    });
    cities.forEach( (item) => {
      if (item.value == location) {
        city = item.label
      }
    });
    return `${city}`
  }
  function clickEdit() {
    setEdit(true);
  }
  let quantity_type =
    (item?.title.match(regex1) || item?.title.match(regex2) || item?.title.match(regex3)) != null ? strings.price_per : item?.title.match(regex) == null ? strings.price_per : strings.price_nutes;
  return (
    <View style={styles.container}>
      <View style={styles.main_view}>
        <View style={styles.image_view}>
          <Spinner
            visible={isLoading}
            textContent={"Loading..."}
            textStyle={{ color: "#000" }}
          />
          <Swiper
            showsButtons={images?.length < 2 ? false:true}
            dot={
                <View
                style={{
                  backgroundColor: colors.black,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: colors.primay,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            prevButton={<Text style={{
             color:colors.primay, fontSize:50}}>‹</Text>}
            nextButton={<Text style={{color:colors.primay, fontSize:50}}>›</Text>}
          >
            {images.map((image: { img: any; }) => (
              <View style={{ alignItems: "center" }}>
                <ImageBackground
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: image.img }}
                  imageStyle={{resizeMode: 'contain'}}
                >
                  <View style={styles.row_section}>
                    <TouchableOpacity
                      onPress={() => goBack()}
                      style={styles.back_button}
                    >
                      <Icon
                        name="arrow-back-outline"
                        size={30}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                    <View style={styles.fav_section}>
                    {isManage ?(
                        <TouchableOpacity
                          onPress={() => {navigation.navigate("EditPost",{item:item})}}
                          
                          style={styles.fav_button}
                        >
                    {/* trash-outline */}
                    <Icon name="build-outline" size={24} color={colors.black} />
                  </TouchableOpacity>):(
                      <TouchableOpacity
                        onPress={() => void clickFavorite(!favorite)}
                        style={styles.fav_button}
                      >
                        <Icon
                              name= { favorite? "heart-sharp" : "heart-outline"}
                              size={30}
                              color={colors.black}
                            />
                      </TouchableOpacity>)}
                    </View>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </Swiper>
        </View>
        <View style={styles.details_view}>
          <View style={styles.scroller_section}>
            <ScrollView
              contentContainerStyle={{
                justifyContent: "flex-start",
                alignContent: "center",
              }}
            >
              <View style={styles.input_section}>
                <Text style={styles.text_title}>{item?.title}</Text>
                <Text style={styles.text_body}>
                  {item?.description}
                </Text>
              </View>
              <View style={styles.price_section}>
                <View style={styles.row_section}>
                  <Text style={styles.text_title}>
                    RS{" "}
                    {parseFloat(item?.price ?? "0").toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </View>
                {item?.category != "13" && item?.category != "14" &&
                  <View style={styles.row_section}>
                    <Text style={styles.text_title_q}>{item?.quantity}</Text>
                    <Text style={styles.price_title}> {quantity_type}</Text>
                  </View>
                }
                <View style={styles.row_section}>
                  <Text style={styles.time_title}>
                    {moment(Date.parse(item?.updated_at as string)).format(
                      "lll"
                    )}
                  </Text>
                </View>
                <View style={styles.row_section}>
                  <Text style={styles.time_title}>{strings.location}:</Text>
                  <Text style={styles.time_title}> {getLocation(item?.location ?? "")}</Text>
                </View>
                  <View style={{marginTop: 8}}>
                    <Text style={styles.text_contact}>{isLogin == "2" ? strings.contact_person : strings.posted_person}:</Text>
                    <Text style={styles.text_contact_}>{user.name}</Text>
                    { isLogin == "2" &&
                      <>
                        <TouchableOpacity onPress={()=>{void makeACall()}}>
                          <Text style={styles.text_contact_}>{user.mobile}</Text>
                        </TouchableOpacity>
                        <Text style={styles.text_contact_}>{user.email}</Text>
                      </>
                    }
                  </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.button_section}>
            {!isManage &&
              <Button
                label={strings.call}
                onPress={() => {
                  void makeACall();
                }}
                isActive={false}
              />
            }
            {isManage &&
              <>
              {/* 1 - user, 2 - admin */}
              {/* 0-pending, 1-approved, 2-rejected, 3-finish, 4-cancel */}
              { isLogin == "2" && item?.status == "0" &&
              
                <View style={styles.colum_view_a}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex:1, marginRight:4 }}>
                      <Button
                        label={strings.reject}
                        isActive={false}
                        isReject={true}
                        onPress={() => {
                          void clickChangeStatus(2);
                        }}
                      />
                    </View>
                    <View style={{flex:1, marginLeft:4 }}>
                      <Button
                        label={strings.approve}
                        isActive={true}
                        onPress={() => {
                          void clickChangeStatus(1);
                        }}
                      />
                    </View>
                  </View>
                </View>
                }
                { isLogin == "1" && item?.status == "0" &&
                <View style={styles.colum_view_a}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex:1, marginRight:4 }}>
                      <Button
                        label={strings.cancel}
                        isActive={false}
                        isReject={true}
                        onPress={() => {
                          void clickChangeStatus(4);
                        }}
                      />
                    </View>
                  </View>
                </View>
                }
                { isLogin == "1" && item?.status == "1" &&
                <View style={styles.colum_view_a}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex:1, marginRight:4 }}>
                      <Button
                        label={strings.sold_out}
                        isActive={false}
                        isReject={true}
                        onPress={() => {
                          void clickChangeStatus(3);
                        }}
                      />
                    </View>
                  </View>
                </View>
                }
              </>
            }
          </View>
        </View>
      </View>
    </View>
  );
}
export default DetailsScreen;