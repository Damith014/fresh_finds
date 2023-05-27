import * as React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import strings from "../../../constants/strings";
export default function LoginCard() {
  return (
    <View style={{ margin: 24 }}>
      <Text style={styles.text_title}>{strings.post_ad}</Text>
      <Text style={styles.text_sub_title}>{strings.login_note}</Text>
      <Text style={styles.text_sub}>{strings.login_note_1}</Text>
      <Text style={styles.text_sub}>{strings.login_note_2}</Text>
      <Text style={styles.text_sub}>{strings.login_note_3}</Text>
    </View>
  );
}