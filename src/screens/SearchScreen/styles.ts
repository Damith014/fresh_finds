import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: colors.primay,
  },
  menu_button:{
    margin:16
  },
  row_section:{
    flexDirection:'row'
  },
  search_button: {
    marginTop:16,
    marginRight:16,
  },
  search_section:{
    alignItems: 'flex-end',
    flex:1
  },
  tag_section_admin: {
    marginRight:16,
    marginLeft:16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
button_section: {
  position: "absolute",
  width: "100%",
  bottom: 0,
  padding: 24,
},
text_title: {
  fontFamily:'NotoSansSinhala-Bold',
  fontSize: 14,
  marginBottom:8,
  color: colors.black,
},
text_title_1: {
  fontFamily:'NotoSansSinhala-Bold',
  fontSize: 12,
  marginBottom:8,
  // color: colors.black,
},
text_sub_title: {
  fontFamily:'NotoSansSinhala-Medium',
  fontSize: 14,
  marginBottom:8,
  lineHeight:24,
  color: colors.dark_gray,
},
text_sub: {
  fontFamily:'NotoSansSinhala-Regular',
  fontSize: 12,
  marginBottom:8,
  lineHeight:24,
  color: colors.dark_gray,
},
text_head:{
  marginTop: 22,
  fontWeight: '600',
  fontSize: 16,
  fontFamily:'NotoSansSinhala-Medium',
  color: colors.menu
},
back_button: {
  marginTop:16,
  marginLeft:16,
},
location_button: {
  marginTop:4,
  marginLeft:16,
},
search_box: {
  marginTop: 12,
  fontSize: 12,
  marginLeft: 10,
  width: "100%", 
  height:36,
  borderColor: colors.light_gray,
  borderWidth: 1,
  padding:8,
  paddingLeft:20,
  borderRadius: 24,
},
search_box_view: {
  width: "75%", 
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

centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  paddingTop:20,
  paddingBottom:15,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button_section_1: {
  marginTop: 20,
  marginLeft: 24,
  marginRight: 24,
  marginBottom:20
},
});
