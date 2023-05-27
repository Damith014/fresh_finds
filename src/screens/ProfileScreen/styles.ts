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
    marginTop: 16,
    marginLeft:16
  },
  menu_button:{
    margin:16
  },
  row_section:{
    flexDirection:'row'
  },
  search_section:{
    alignItems: 'flex-end',
    flexDirection:'column',
    flex:1,
    marginRight:24
  },
  search_button: {
    marginTop:16,
    marginRight:16,
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
  },
  text_head:{
    marginTop: 22,
    fontWeight: '600',
    fontSize: 16,
    fontFamily:'NotoSansSinhala-Medium',
    color: colors.menu
  },
  text_edit:{
    marginTop: 4,
    fontSize: 16,
    fontFamily:'NotoSansSinhala-Regular',
    color: colors.dark
  },
  name_header: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 16,
    marginTop:8,
    fontFamily:'NotoSansSinhala-Medium',
  },
  title_header: {
    color: colors.dark_gray,
    marginTop:4,
    fontWeight: "400",
    fontSize: 12,
    textAlign:'center',
    fontFamily:'NotoSansSinhala-Medium',
  },
  value_header: {
    color: colors.dark,
    fontWeight: "400",
    fontSize: 14,
    fontFamily:'NotoSansSinhala-Medium',
  },
  image: {
    width: 90,
    height: 90,
    borderColor: colors.menu,
    borderRadius: 45,
    borderWidth: 1,
  },
  profile_section: {
    marginRight: 16,
    marginLeft: 16,
    alignItems:'center'
  },
  rank_section:{
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width:'100%',
    borderRadius: 10,
    shadowColor: "#000",
    backgroundColor:'#FFFFFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    padding: 8,
    flexDirection:'row'
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: colors.menu,
  },
  text_title_label:{
    fontWeight: '400',
    fontSize: 12,
    fontFamily:'NotoSansSinhala-Medium',
    color: colors.title_color
  },
  text_value_label:{
    marginTop: 4,
    fontWeight: '600',
    fontSize: 13,
    fontFamily:'NotoSansSinhala-Medium',
    color: colors.value
  },
});
