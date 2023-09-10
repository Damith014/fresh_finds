import * as React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import strings from "../../../constants/strings";
import { Item } from "../../../constants/interfaces";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
type Props = {
  onPress?: any;
  item?: Item;
  isManage?: boolean;
  isPending?:boolean;
  handleCallback?: any;
  showStatus?: boolean
};
type detailsScreenProp = StackNavigationProp<RootNavigation, "Details">;
export default function ItemCard({
  item,
  isManage,
  isPending,
  handleCallback,
  showStatus
}: Props) {
  const navigation = useNavigation<detailsScreenProp>();
  const category = [
    { label: "සියල්ල", value: "0" },
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
  ];
  let type = category[Number(item?.category ?? 0)].label;
  const regex = /පොල්/g;
  const regex1 = /පොල් තෙල්/g;
  const regex2 = /Dc පොල්/g;
  const regex3 = /පොල්තෙල්/g;
  let quantity_type =
    (item?.title.match(regex1) || item?.title.match(regex2) || item?.title.match(regex3)) != null ? strings.price_per : item?.title.match(regex) == null ? strings.price_per : strings.price_nutes;
  
  let images = item?.images.split(",") ?? [];
  let image = images.length == 0 ? `https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png` : `http://sigirisoft.lk/fresh_backend/upload/${images[0]}`;
  function toTimestamp(strDate: any){
    let datum = Date.parse(strDate);
    return datum;
  }
  function timeSince(date: number) {
    let seconds = Math.floor((new Date().getTime() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) == 1 ? Math.floor(interval) + " year" : Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) == 1 ? Math.floor(interval) + " month" : Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) == 1 ? Math.floor(interval) + " day" : Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) == 1 ? Math.floor(interval) + " hour" : Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) == 1 ? Math.floor(interval) + " minute" : Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) == 1 ? Math.floor(seconds) + " second" : Math.floor(seconds) + " seconds";
  }
  function callBack(){
    handleCallback();
  }
  return (
    <View style={isPending? styles.view_pending: styles.view_main}>
      <TouchableOpacity
      onPress={() => navigation.navigate("Details", {item: item, isMange: isManage ?? false, callBack: callBack})}
      >
        <View style={styles.view}>
          {showStatus &&
          // 0-pending, 1-approved, 2-rejected, 3-finish, 4-cancel
            <View style={item?.status == "0" ?styles.verticle_p: item?.status == "1"? styles.verticle_a: 
            item?.status == "2"?styles.verticle_r:item?.status == "3"?styles.verticle_o:item?.status == "4"?
          styles.verticle_c: styles.verticle_p}></View>
          }
          <View style={styles.colum_view}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.icon}
            />
          </View>
          <View style={styles.colum_view_a}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%", alignItems: "flex-start" }}>
                <Text style={styles.text_title}>{item?.title}</Text>
                <View style={styles.row_section}>
                  <Text style={styles.time_title}>{item?.location} </Text>
                </View>
                <Text style={styles.time_sub_title}>{type}</Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text style={styles.text_title_right}>
                  RS {parseFloat(item?.price ?? "0").toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </Text>
                {item?.category != "13" && item?.category != "14" &&
                  <Text style={styles.price_title}>{item?.quantity} {quantity_type}</Text>
                }
              </View>
            </View>
            <View style={styles.section_ago}>
              <Text style={styles.time_title_ago}>{timeSince(toTimestamp(item?.updated_at))} ago</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}