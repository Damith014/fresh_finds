import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
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
  menu_button:{
    margin:16
  },
  header_section: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 10,
  },
  logo_section: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 10,
    alignItems: "center",
  },
  input_section: {
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
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
    flexDirection: "row",
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
  header_label_text: {
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 18,
    color: colors.dark,
    marginBottom: 12,
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
  }
});
