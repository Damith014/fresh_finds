import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  text_view: {
    flexDirection: "row",
    borderColor: colors.light_gray,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 48,
    width: "100%",
    marginTop: 8,
  },
  otp_view: {
    borderColor: colors.light_gray,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 48,
    minWidth:48,
    marginTop: 8,
  },
  input_container: {
    flexDirection: "row",
    borderColor: colors.light_gray,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
    minHeight: 48,
    width: "100%",
    marginTop: 8,
  },
  text_error_view: {
    flexDirection: "row",
    borderColor: colors.pure_red,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 48,
    width: "100%",
    marginTop: 10,
  },
  text: {
    width: "90%",
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 16,
    color: colors.black,
    marginLeft: 8,
    minHeight: 48,
    lineHeight: 22,
  },
  text_otp: {
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 16,
    color: colors.black,
    minHeight: 48,
    minWidth:48,
    lineHeight: 22,
    textAlign:'center',
  },
  text_error: {
    width: "90%",
    fontWeight: "600",
    fontSize: 12,
    color: colors.pure_red,
    marginLeft: 4,
    marginTop: 4,
    lineHeight: 22,
  },
  text_placeholder: {
    width: "88%",
    fontFamily:'NotoSansSinhala-Regular',
    fontSize: 14,
    color: colors.dark_gray,
    marginLeft: 8,
    minHeight: 48,
    lineHeight: 22,
  },
  error_section: {
    marginTop: 5,
  },
  label_contry:{
    fontSize:16,
    color:colors.black,
    marginLeft:4,
    fontFamily:'NotoSansSinhala-Regular'
  }
});

export default styles;
