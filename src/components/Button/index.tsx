import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  label: string;
  isReject?:boolean;
  isSellOut?:boolean;
  isActive: boolean;
  onPress: () => void;
};

export default function Button({
  label,
  isActive,
  isReject,
  isSellOut,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={isReject? styles.red: isSellOut? styles.gray: styles.dark}>
      <Text style={styles.label_text}>{label}</Text>
    </TouchableOpacity>
  );
}
