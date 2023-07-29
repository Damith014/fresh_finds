import * as React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Notification } from "../../../constants/interfaces";

type Props = {
  notification?: Notification;
};
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
export default function NotificationCard({ notification }: Props) {
  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/bell.png")}
      />
      <View style={styles.row_container}>
        <View style={{flex:2}}>
        <Text style={styles.text_container}>{notification?.title}</Text>
        <Text style={styles.text_sub}>{notification?.body}</Text>
        </View>
        <View style={{flex:1}}>
        <Text style={styles.text_score}>{timeSince(toTimestamp(notification?.created_at))} ago</Text>
        </View>
      </View>
    </View>
  );
}
