import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: colors.primay,
  },
  back_button:{
    margin:24
  },
  header_section: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 10,
  },
  logo_section: {
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 10,
    alignItems: "center",
  },
  input_section: {
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
    width:'60%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  section: {
    marginTop: 5,
    marginLeft: 24,
    marginRight: 24,
  },
  button_section: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
  },
  label_section: {
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'column',
    marginBottom: 10,
  },
  error_section: {
    marginTop: 15,
    marginLeft: 38,
    marginRight: 35,
    marginBottom: 10,
  },
  header_label_section: {
    fontSize: 14,
    color: colors.black,
    fontFamily:'NotoSansSinhala-Medium'
  },
  header_label_mobile: {
    marginTop:8,
    fontSize: 14,
    color: colors.black,
    fontFamily:'NotoSansSinhala-Medium'
  },
  otp_label_section: {
    marginTop:16,
    fontSize: 14,
    color: colors.black,
    fontFamily:'NotoSansSinhala-Bold'
  },
  header_label_text: {
    fontFamily:'NotoSansSinhala-Regular',
    marginTop:16,
    fontSize: 14,
    color: colors.dark,
  },
  header_label_text_opacity: {
    fontFamily:'NotoSansSinhala-Regular',
    marginTop:16,
    fontSize: 14,
    opacity:0.4,
    color: colors.dark,
  },
  error_text: {
    fontSize: 14,
    color: colors.pure_red,
  },
  text_title: {
    fontFamily:'NotoSansSinhala-Regular',
    fontSize: 14,
    marginBottom:8,
    color: colors.dark_gray,
  },
  text_header: {
    fontSize: 22,
    textAlign: "left",
    color: colors.dark,
    fontFamily:'NotoSansSinhala-Medium'
  },
  text_error_view: {
    borderColor: colors.pure_red,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 48,
    minWidth:48,
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
  text_otp: {
    fontFamily:'NotoSansSinhala-Bold',
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
    marginTop: 4,
    lineHeight: 22,
    marginLeft: 24,
    marginRight: 24,
  },
});
