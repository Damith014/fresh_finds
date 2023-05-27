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
  const regex = /පොල්/g;
  const item = route.params.item;
  const isManage = route.params.isMange;
  let images_ = item?.images.split(",") ?? [];
  const [images, setImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
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
    Linking.openURL(`tel:${user.mobile}`);
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
  let quantity_type =
    item?.title.match(regex) == null ? strings.price_per : strings.price_nutes;
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
            showsButtons={false}
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
          >
            {images.map((image: { img: any; }) => (
              <View style={{ alignItems: "center" }}>
                <ImageBackground
                  resizeMode="stretch"
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: image.img }}
                >
                  <View style={styles.row_section}>
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={styles.back_button}
                    >
                      <Icon
                        name="arrow-back-outline"
                        size={30}
                        color={colors.primay}
                      />
                    </TouchableOpacity>
                    <View style={styles.fav_section}>
                      <TouchableOpacity
                        onPress={() => void clickFavorite(!favorite)}
                        style={styles.fav_button}
                      >
                        {!isManage &&
                            <Icon
                              name= { favorite? "heart-sharp" : "heart-outline"}
                              size={30}
                              color={colors.primay}
                            />
                        }
                      </TouchableOpacity>
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
                  <Text style={styles.price_title}> {quantity_type}</Text>
                </View>
                <View style={styles.row_section}>
                  <Text style={styles.time_title}>
                    {moment(Date.parse(item?.updated_at as string)).format(
                      "lll"
                    )}
                  </Text>
                </View>
                <View style={styles.row_section}>
                  <Text style={styles.time_title}>{strings.location}:</Text>
                  <Text style={styles.time_title}> {item?.location}</Text>
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