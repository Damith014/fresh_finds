import * as React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import strings from "../../../constants/strings";
import Button from "../../Button";
import { Item } from "../../../constants/interfaces";

type Props = {
  item?: Item;
  isManage?:boolean;
  isSoldOut?:boolean;
  isPending?:boolean;
};

export default function ItemCard({
  item,
  isManage,
  isSoldOut,
  isPending
}: Props) {
  const category = [
    { label: "සියල්ල", value: "0" },
    { label: "එළවළු වර්ග", value: "1" },
    { label: "පළතුරු වර්ග", value: "2" },
    { label: "පලා වර්ග", value: "3" },
    { label: "අල වර්ග", value: "4" },
    { label: "ධාන්‍ය වර්ග", value: "5" },
    { label: "කුළු බඩු වර්ග", value: "6" },
    { label: "කරවල වර්ග", value: "7" },
    { label: "මස්, බිත්තර හා මුහුදු ආහාර", value: "8" },
    { label: "කෙටි ආහාර", value: "9" },
    { label: "බයිට් වර්ග හා රස කැවිලි", value: "10" },
    { label: "පොල්, DC පොල්, කොප්පරා, පොල්තෙල්", value: "11" },
    { label: "පුවක්, කරැංකා, දුම්කොල, බුලත්", value: "12" },
  ];
  let type = category[Number(item?.category ?? 0)].label;
  const regex = /පොල්/g;
  let quantity_type = item?.title.match(regex) == null ? strings.price_per : strings.price_nutes;
  let images = item?.images.split(",") ?? [];
  let image = images.length == 0 ? `https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png` : `http://sigirisoft.lk/fresh_backend/upload/${images[0]}`;
  function toTimestamp(strDate: any){
    var datum = Date.parse(strDate);
    return datum;
  }
  function timeSince(date: number) {
    var seconds = Math.floor((new Date().getTime() - date) / 1000);
    var interval = seconds / 31536000;
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
  return (
    <View style={isPending? styles.view_pending: styles.view_main}>
      <View style={styles.view}>
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
              <Text style={styles.price_title}>{item?.quantity} {quantity_type}</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.text_title_right}>RS {parseFloat(item?.price ?? "0").toLocaleString(undefined, { minimumFractionDigits: 2 })}</Text>
            </View>
          </View>
          <View style={styles.section_ago}>
            <Text style={styles.time_title_ago}>{timeSince(toTimestamp(item?.updated_at))} ago</Text>
          </View>
        </View>
      </View>
      {isManage &&
        <View style={styles.colum_view_a}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex:1, alignItems: "flex-start", marginRight:4 }}>
              <Button
                label={strings.reject}
                isActive={false}
                isReject={true}
                onPress={() => {
                  undefined;
                }}
              />
            </View>
            <View style={{flex:1,  alignItems: "flex-start", marginLeft:4 }}>
              <Button
                label={strings.approve}
                isActive={false}
                onPress={() => {
                  undefined;
                }}
              />
            </View>
          </View>
        </View>
      }
      {isSoldOut &&
        <View style={styles.colum_view_a}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex:1, alignItems: "flex-start", marginRight:4 }}>
              {/* <Button
                label={strings.reject}
                isActive={false}
                isReject={true}
                onPress={() => {
                  undefined;
                }}
              /> */}
            </View>
            <View style={{flex:1,  alignItems: "flex-start", marginLeft:4 }}>
              <Button
                label={strings.sold_out}
                isActive={false}
                onPress={() => {
                  undefined;
                }}
              />
            </View>
          </View>
        </View>
      }
    </View>
  );
}
