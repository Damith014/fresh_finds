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
  dropdown: {
    minHeight: 48,
    borderColor:colors.light_gray,
    borderWidth: 1,
    backgroundColor:colors.primay,
    borderRadius: 10,
    paddingHorizontal: 8,
    color: colors.black,
  },
  dropdown_error: {
    minHeight: 48,
    borderColor:colors.pure_red,
    borderWidth: 1,
    backgroundColor:colors.primay,
    borderRadius: 10,
    paddingHorizontal: 8,
    color: colors.black,
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
    marginBottom:20
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
    fontFamily:'NotoSansSinhala-Bold'
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
    fontSize: 12,
    marginTop:8,
    color: colors.black,
  },
  text_hint: {
    fontFamily:'NotoSansSinhala-Regular',
    fontSize: 10,
    marginTop:8,
    color: colors.dark,
  },
  text_header: {
    fontSize: 22,
    textAlign: "left",
    color: colors.dark,
    fontFamily:'NotoSansSinhala-Medium'
  },
  text_view: {
    flex:1,
    borderColor: colors.light_gray,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 48,
    minWidth: 48,
    marginTop: 8,
    padding: 4,
    marginLeft:4,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
    
  },
  text_view_error: {
    flex:1,
    borderColor: colors.pure_red,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 48,
    minWidth: 48,
    marginTop: 8,
    padding: 4,
    marginLeft:4,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
    
  },
  text_placeholder: {
    width: "88%",
    fontFamily:'NotoSansSinhala-Regular',
    fontSize: 10,
    color: colors.dark_gray,
    marginLeft: 8,
    marginTop: 4,
    textAlign:'center'
  },
  text_head:{
    marginTop: 22,
    fontWeight: '600',
    fontSize: 16,
    fontFamily:'NotoSansSinhala-Medium',
    color: colors.menu
  },
  text_view_: {
    flexDirection: "row",
    borderColor: colors.light_gray,
    borderWidth: 1,
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
  text_error: {
    width: "90%",
    fontWeight: "600",
    fontSize: 12,
    color: colors.pure_red,
    marginLeft: 4,
    marginTop: 4,
    lineHeight: 22,
  },
  text_placeholder_: {
    width: "88%",
    fontFamily:'NotoSansSinhala-Regular',
    fontSize: 12,
    color: colors.dark_gray,
    marginLeft: 8,
    minHeight: 48,
    lineHeight: 22,
  },
  text: {
    width: "90%",
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 12,
    color: colors.black,
    marginLeft: 8,
    minHeight: 48,
    lineHeight: 22,
  },
});
