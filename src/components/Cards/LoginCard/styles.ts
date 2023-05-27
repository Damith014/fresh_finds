import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
  text_title: {
    fontFamily: "NotoSansSinhala-Bold",
    fontSize: 14,
    marginBottom: 8,
    color: colors.black,
  },
  text_sub_title: {
    fontFamily: "NotoSansSinhala-Medium",
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 24,
    color: colors.dark_gray,
  },
  text_sub: {
    fontFamily: "NotoSansSinhala-Regular",
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 24,
    color: colors.dark_gray,
  },
});
export default styles;