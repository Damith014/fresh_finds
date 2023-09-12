import React, {useState} from "react";
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
                  <Text style={styles.time_title}>{getLocation(item?.location ?? "")}</Text>
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