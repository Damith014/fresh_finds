import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Image,
  Alert,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { styles } from "./styles";
import colors from "../../constants/colors";
import strings from "../../constants/strings";
import ActionSheet from "react-native-actionsheet";
import { Dropdown } from "react-native-element-dropdown";
import Service from "../../service/Service";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { RootNavigation } from "../../navigations/RootNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Account } from "../../constants/interfaces";
type editPostScreenProp = StackNavigationProp<RootNavigation, "EditPost">;
type editPostScreenRouteProp = RouteProp<RootNavigation, "EditPost">;
function EditPostScreen() {
  const route = useRoute<editPostScreenRouteProp>();
  const navigation = useNavigation<editPostScreenProp>();
  const item = route.params.item
  
  const [category] = useState([
    { label: "එළවළු වර්ග", value: "1" },
    { label: "පළතුරු වර්ග", value: "2" },
    { label: "ධාන්‍ය වර්ග", value: "3" },
    { label: "කුළු බඩු වර්ග", value: "4" },
    { label: "කරවල වර්ග", value: "5" },
    { label: "පොල්, DC පොල්, කොප්පරා, පොල්තෙල්", value: "6" },
    { label: "පුවක්, කරැංකා, දුම්කොල, බුලත්", value: "7" },
    { label: "විජලනය / අගය එකතු කළ ආහාර", value: "8" },
    { label: "බයිට් වර්ග හා රස කැවිලි", value: "9" },
    { label: "මස්, බිත්තර හා මුහුදු ආහාර", value: "10" },
    { label: "අල වර්ග", value: "11" },
    { label: "රම්පේ, කරපිංචා, පලා වර්ග ඇතුලු කොල වර්ග", value: "12" },
    { label: "ඩිලිවරි භාණ්ඩ", value: "13"},
    { label: "අපනයන භාණ්ඩ", value: "14"}
  ]);
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
  let actionSheet = useRef<any>();
  let optionArray = ["Camera", "Photo & Video Libary", "Cancel"];
  const [filePath, setFilePath] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [select, setSelectImage] = useState(0);
  const [cat, setCategory] = useState<any>();
  const [label, setLable] = useState("");
  const [dis, setDistrict] = useState("");
  const [cit, setCity] = useState("");
  const [citys, setCitys] = useState<any>([]);
  const [data, setData] = useState({
    item_id: "",
    user_id: "",
    category: "",
    district: "",
    city: "",
    location: "",
    title: "",
    price: "",
    quantity: "",
    description: "",
    images: ""
  })
  const [error, setError] = useState({
    user_id: false,
    category: false,
    location: false,
    title: false,
    price: false,
    quantity: false,
    description: false,
    images: false,
    message: strings.required,
  })
  useEffect(() => {
    setIsLoading(false);
    getUser().catch(error => {});
    async function getUser() {
      let user = await AsyncStorage.getItem("account");
      let account = JSON.parse(user ?? '') as Account;
      var splitted = item?.location.split("-");
      onclickDistrict(splitted[0])
      setData({
        ...data,
        item_id: item?.id ?? "",
        user_id: account.id,
        category: item?.category ?? "",
        district: splitted[0],
        city: splitted[1],
        location: item?.location ?? "",
        title: item?.title ?? "",
        price: item?.price ?? "",
        quantity: item?.quantity ?? "",
        description: item?.description ?? "",
        images: item?.images ?? ""
      })
      setCategory(item?.category)
      let images_ = item?.images.split(",") ?? [];
      setImages(images_);
      let img_:any[] = []
      images_.map((img) =>
        img_.push(`http://sigirisoft.lk/fresh_backend/upload/${img}`)
      );
      setFilePath(img_);
    }
  }, []);
  function onclickDistrict(value: string) {
    setCitys([]);
    var array: { label: string; value: string; }[] = []
    cities.forEach( (item) => {
      var splitted = item.value.split("-");
      if (splitted[0] == value) {
        array.push(item);
      }
    });
    setCitys(array);
  }
  function clickOnImage(index: number) {
    actionSheet.current.show();
    setSelectImage(index);
  }
  async function onClickPost() {
    let is_error = false
    if (data.city == "") {
      is_error = true;
    }
    if (data.title == "") {
      is_error = true;
    }
    if (data.price == "") {
      is_error = true;
    }
    if (data.quantity == "" && (data.category != "13" && data.category != "14")) {
      is_error = true;
    }
    if (data.description == "") {
      is_error = true;
    }
    console.log(images);
    
    if (images.length == 0) {
      is_error = true;
    }
    if (data.category == "") {
      is_error = true;
    }
    
    
    if (!is_error) {
      let payload = {
        "item_id" : data.item_id,
        "user_id" : data.user_id,
        "category": data.category,
        "location": data.city,
        "title": data.title,
        "price": data.price,
        "quantity": data.quantity,
        "description": data.description,
        "images": images.toString()
      }
      setIsLoading(true);
      let response = await Service.edit(payload);
      if(response.status == "100") {
        Alert.alert(
          "Alert",
          strings.under_review_body,
          [
            {
              text: strings.next_button,
              onPress: () => {
                navigation.navigate("Drawer");
              },
            }
          ]
        );
      } else {
        Alert.alert(
          "Error",
          strings.under_review_error,
          [
            {
              text: strings.under_review_error_button,
              onPress: () => {
              },
            }
          ]
        );
      }
    }
    setIsLoading(false);
  }
  async function openImage(index: number) {
    if (index == 0) {
      let options = {
        mediaType: 'photo',
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
            setFilePath([...filePath, asset]);
          }
        });
      }
    } else if (index == 1) {
      let options = {
        mediaType: "photo",
        quality: 1,
      };
      launchImageLibrary(options, (response) => {
        if (0 < (response.assets ?? []).length) {
          let asset = response.assets![0].uri
          fileUpload(asset);
          setFilePath([...filePath, asset]);
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
      setImages([...images, file_response.users]);
    }
    setIsLoading(false);
  }
  function removeImage(index: number) {
    setFilePath([
      ...filePath.slice(0, index),
      ...filePath.slice(index + 1, filePath.length)
    ]);
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length)
    ]);
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
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back_button}>
        <Icon name="arrow-back-outline" size={30} color={colors.dark} />
      </TouchableOpacity>
      <Spinner
            visible={isLoading}
            textContent={"Loading..."}
            textStyle={{ color: "#000" }}
          />
      <ScrollView>
        <View style={styles.header_section}>
          <Text style={styles.header_label_section}>{strings.edit_header}</Text>
        </View>
        <View style={ styles.input_section}>
          <Text style={styles.text_title}>{strings.category}</Text>
          <Dropdown
            style={cat == "" ? styles.dropdown_error :styles.dropdown}
            placeholderStyle={{
              color: colors.dark_gray,
              fontWeight: "300",
              fontSize: 12,
            }}
            selectedTextStyle={{
              color: colors.black,
              fontWeight: "600",
              fontSize: 12,
            }}
            inputSearchStyle={{
              height: 40,
              fontSize: 12,
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            data={category}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={strings.category}
            searchPlaceholder="Search..."
            value={data.category}
            onChange={(item) => {
              setCategory(item.value);
              setLable(item.label);
              setData({
                ...data,
                category: item.value,
              })
            }}
          />
        </View>

        <View style={ styles.input_section}>
          <Text style={styles.text_title}>{strings.district}</Text>
          <Dropdown
            style={dis == "" ? styles.dropdown_error :styles.dropdown}
            placeholderStyle={{
              color: colors.dark_gray,
              fontWeight: "300",
              fontSize: 12,
            }}
            selectedTextStyle={{
              color: colors.black,
              fontWeight: "600",
              fontSize: 12,
            }}
            inputSearchStyle={{
              height: 40,
              fontSize: 12,
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            data={districts}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={strings.district}
            searchPlaceholder="Search..."
            value={data.district}
            onChange={(item) => {
              onclickDistrict(item.value)
              setDistrict(item.value);
              setData({
                ...data,
                district: item.value,
              })
            }}
          />
        </View>
        <View style={ styles.input_section}>
          <Text style={styles.text_title}>{strings.city}</Text>
          <Dropdown
            style={cit == "" ? styles.dropdown_error :styles.dropdown}
            placeholderStyle={{
              color: colors.dark_gray,
              fontWeight: "300",
              fontSize: 12,
            }}
            selectedTextStyle={{
              color: colors.black,
              fontWeight: "600",
              fontSize: 12,
            }}
            inputSearchStyle={{
              height: 40,
              fontSize: 12,
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            data={citys}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={strings.city}
            searchPlaceholder="Search..."
            value={data.city}
            onChange={(item) => {
              setCity(item.value);
              setData({
                ...data,
                city: item.value,
              })
            }}
          />
        </View>
        {/* <View style={styles.input_section}>
          <Text style={styles.text_title}>{strings.location}</Text>
          <TextField
            placeholder={strings.location}
            isEmpty={data.location == "" ? true : false}
            isError={data.location == "" ? true : false}
            isOtp={false}
            error={error.message}
            isText={true}
            value={data.location}
            onChange={(value) => setData({
              ...data,
              location: value,
            })

            }
          />
        </View> */}
        <View style={styles.input_section}>
          <Text style={styles.text_title}>{strings.photos}</Text>
          <View style={{ flexDirection: "row", flex: 3 }}>
            {filePath.length == 0 &&
              <>
                <TouchableOpacity
                  onPress={() => {
                    clickOnImage(1);
                  }}
                  style={images.length == 0 ? styles.text_view_error : styles.text_view}
                >
                  <Icon name="image-outline" size={30} />
                  <Text style={styles.text_placeholder}>{strings.image_tag}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    clickOnImage(2);
                  }}
                  style={styles.text_view}
                >
                  <Icon name="image-outline" size={30} />
                  <Text style={styles.text_placeholder}>{strings.image_tag}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    clickOnImage(2);
                  }}
                  style={styles.text_view}
                >
                  <Icon name="image-outline" size={30} />
                  <Text style={styles.text_placeholder}>{strings.image_tag}</Text>
                </TouchableOpacity>
              </>
            }
            {filePath.length == 1 &&
              <>
                <View style={styles.text_view}>
                    <Image
                      source={{uri:`${filePath[0]}`}}
                      style={{ 
                        width: '100%', 
                        height: 100 
                    }}/>
                    <TouchableOpacity onPress={()=>{removeImage(0)}}>
                      <Icon 
                        name="md-close"
                        color={colors.pure_red}
                        size={16}
                        style={{marginTop: 4}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    clickOnImage(2);
                  }}
                  style={styles.text_view}
                >
                  <Icon name="image-outline" size={30} />
                  <Text style={styles.text_placeholder}>{strings.image_tag}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    clickOnImage(3);
                  }}
                  style={styles.text_view}
                >
                  <Icon name="image-outline" size={30} />
                  <Text style={styles.text_placeholder}>{strings.image_tag}</Text>
                </TouchableOpacity>
              </>
            }  
            {filePath.length == 2 &&
              <>
                <View style={styles.text_view}>
                    <Image
                      source={{uri:`${filePath[0]}`}}
                      style={{ 
                        width: '100%', 
                        height: 100 
                    }}/>
                    <TouchableOpacity onPress={()=>{removeImage(0)}}>
                      <Icon 
                        name="md-close"
                        color={colors.pure_red}
                        size={16}
                        style={{marginTop: 4}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.text_view}>
                    <Image
                      source={{uri:`${filePath[1]}`}}
                      style={{ 
                        width: '100%', 
                        height: 100 
                    }}/>
                    <TouchableOpacity onPress={()=>{removeImage(1)}}>
                      <Icon 
                        name="md-close"
                        color={colors.pure_red}
                        size={16}
                        style={{marginTop: 4}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    clickOnImage(3);
                  }}
                  style={styles.text_view}
                >
                  <Icon name="image-outline" size={30} />
                  <Text style={styles.text_placeholder}>{strings.image_tag}</Text>
                </TouchableOpacity>
              </>
            }   
            {filePath.length == 3 &&
              <>
                <View style={styles.text_view}>
                    <Image
                      source={{uri:`${filePath[0]}`}}
                      style={{ 
                        width: '100%', 
                        height: 100 
                    }}/>
                    <TouchableOpacity onPress={()=>{removeImage(0)}}>
                      <Icon 
                        name="md-close"
                        color={colors.pure_red}
                        size={16}
                        style={{marginTop: 4}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.text_view}>
                    <Image
                      source={{uri:`${filePath[1]}`}}
                      style={{ 
                        width: '100%', 
                        height: 100 
                    }}/>
                    <TouchableOpacity onPress={()=>{removeImage(1)}}>
                      <Icon 
                        name="md-close"
                        color={colors.pure_red}
                        size={16}
                        style={{marginTop: 4}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.text_view}>
                    <Image
                      source={{uri:`${filePath[2]}`}}
                      style={{ 
                        width: '100%', 
                        height: 100 
                    }}/>
                    <TouchableOpacity onPress={()=>{removeImage(2)}}>
                      <Icon 
                        name="md-close"
                        color={colors.pure_red}
                        size={16}
                        style={{marginTop: 4}}/>
                    </TouchableOpacity>
                </View>
              </>
            }
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
          <Text style={styles.text_hint}>{strings.image}</Text>
        </View>
        <View style={styles.input_section}>
          <Text style={styles.text_title}>
            {strings.title}
            {strings.sub_title_1}
            {label.replace(' වර්ග', '')}
            {strings.sub_title_2}
          </Text>
          <TextField
            placeholder={strings.title}
            isEmpty={data.title == "" ? true : false}
            isError={data.title == "" ? true : false}
            isOtp={false}
            error={error.message}
            isText={true}
            value={data.title}
            onChange={(value) => setData({
              ...data,
              title: value,
            })}
          />
        </View>
        <View style={styles.input_section}>
          <Text style={styles.text_title}>{(data.category != "13" && data.category != "14")?strings.unit_price :(strings.unit_price).replace("1 Kg - ","")}</Text>
          <TextField
            placeholder={(data.category != "13" && data.category != "14")?strings.unit_price :(strings.unit_price).replace("1 Kg - ","")}
            isEmpty={data.price == "" ? true : false}
            isError={data.price == "" ? true : false}
            isOtp={false}
            error={error.message}
            isText={false}
            value={data.price}
            onChange={(value) => setData({
              ...data,
              price: value,
            })}
          />
        </View>
        {(data.category != "13" && data.category != "14") &&
          <View style={styles.input_section}>
            <Text style={styles.text_title}>{strings.quntity}</Text>
            <TextField
              placeholder={strings.quntity}
              isEmpty={data.quantity == "" ? true : false}
              isError={data.quantity == "" ? true : false}
              isOtp={false}
              error={error.message}
              isText={false}
              value={data.quantity}
              onChange={(value) => setData({
                ...data,
                quantity: value,
              })}
            />
          </View>
         }
        <View style={styles.input_section}>
          <Text style={styles.text_title}>{strings.details}</Text>
          <View style={data.description == "" ? styles.text_error_view : styles.text_view_}>
            <TextInput
              placeholder={strings.details}
              autoCapitalize="none"
              returnKeyType={"done"}
              autoCorrect={false}
              multiline
              value={data.description}
              style={data.description == "" ? styles.text_placeholder_ : styles.text}
              onChangeText={(value) => setData({
                ...data,
                description: value,
              })}
            />
          </View>
          {data.description == "" && <Text style={styles.text_error}>{error.message}</Text>}
        </View>
        <View style={styles.button_section}>
          <Button
            label={strings.edit_button}
            onPress={() => {
              onClickPost()
            }}
            isActive={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
export default EditPostScreen;