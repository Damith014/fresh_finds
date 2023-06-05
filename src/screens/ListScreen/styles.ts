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
dropdown: {
  minHeight: 48,
  marginLeft:16,
  marginRight:16,
  marginBottom:8,
  borderColor:colors.light_gray,
  borderWidth: 1,
  backgroundColor:colors.primay,
  borderRadius: 10,
  paddingHorizontal: 8,
  color: colors.black,
  fontFamily:'NotoSansSinhala-Medium',
  fontSize: 12
},
});
