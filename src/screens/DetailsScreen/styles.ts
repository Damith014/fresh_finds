import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  back_button: {
    marginTop:16,
    marginLeft:16,
    backgroundColor:colors.light,
    borderRadius:8
  },
  fav_button: {
    marginTop:16,
    marginRight:16,
    backgroundColor:colors.light,
    borderRadius:8
  },
  fav_section:{
    alignItems: 'flex-end',
    flex:1
  },
  button_section: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 24,
  },
  main_view: {
    flex: 1,
    flexDirection: "column",
  },
  image_view: {
    flex: 1,
    marginBottom:-20
  },
  details_view: {
    flex: 2,
    backgroundColor: colors.primay,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000000",
    elevation: 4,
  },
  scroller_section:{  
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginBottom:80
  },
  input_section: {
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
  },
  price_section: {
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
  },
  text_title: {
    fontFamily:'NotoSansSinhala-Bold',
    fontSize: 16,
    marginTop:12,
    color: colors.title_color,
  },
  text_title_q: {
    fontFamily:'NotoSansSinhala-Bold',
    fontSize: 14,
    marginTop:15,
    color: colors.title_color,
  },
  text_body: {
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 14,
    marginTop:8,
    color: colors.title_color,
  },
  text_contact: {
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 12,
    marginTop:8,
    color: colors.title_color,
  },
  text_contact_: {
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 12,
    marginTop:8,
    color: colors.dark_gray,
  },
  price_title: {
    fontFamily:'NotoSansSinhala-Regular',
    fontSize: 12,
    marginTop:16,
    color: colors.dark_gray,
  },
  time_title: {
    fontFamily:'NotoSansSinhala-Regular',
    fontSize: 12,
    marginTop:8,
    color: colors.dark_gray,
  },
  row_section:{
    flexDirection:'row'
  },
  colum_view_a:{
    flexDirection:'column',
    flex:1,
    justifyContent:'flex-end'
},
});
