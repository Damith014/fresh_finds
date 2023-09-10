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
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Account } from "../../constants/interfaces";
type postScreenProp = StackNavigationProp<RootNavigation, "Post">;
function PostScreen() {
  const navigation = useNavigation<postScreenProp>();
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
  let actionSheet = useRef<any>();
  let optionArray = ["Camera", "Photo & Video Libary", "Cancel"];
  const [filePath, setFilePath] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [select, setSelectImage] = useState(0);
  const [cat, setCategory] = useState("");
  const [label, setLable] = useState("");
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState({
    user_id: "",
    category: "",
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
      setData({
        ...data,
        user_id: account.id,
      })
    }
  }, []);
  function clickOnImage(index: number) {
    actionSheet.current.show();
    setSelectImage(index);
  }
  async function onClickPost() {
    let is_error = false
    if (data.location == "") {
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
    if (images.length == 0) {
      is_error = true;
    }
    if (data.category == "") {
      is_error = true;
    }
    if (!is_error && data?.user_id != "0") {
      let payload = {
        "user_id" : data.user_id,
        "category": data.category,
        "location": data.location,
        "title": data.title,
        "price": data.price,
        "quantity": data.quantity,
        "description": data.description,
        "images": images.toString()
      }
      setIsLoading(true);
      let response = await Service.create(payload);
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
    const uriParts = file.split('.');
    const fileExtension = uriParts[uriParts.length - 1].toLowerCase();
    payload.append('file', {
      uri: file,
      name: 'image.'+fileExtension,
      type: 'image/'+fileExtension,
    });
    let file_response = await Service.upload(payload);
    console.log(file_response);
    
    if (file_response?.status == "success") {
      setImages([...images, file_response.users]);
    } else {
      Alert.alert(
        "Error",
        file_response?.users ?? "",
        [
          {
            text: strings.under_review_error_button,
            onPress: () => {
            },
          }
        ]
      );
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
          <Text style={styles.header_label_section}>{strings.post_header}</Text>
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
        <View style={styles.input_section}>
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
        </View>
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
            label={strings.post_button}
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
export default PostScreen;