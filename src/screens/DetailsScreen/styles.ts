import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    backgroundColor: colors.backgound_color,
  },
  back_button: {
    marginTop:24,
    marginLeft:24,
  },
  fav_button: {
    marginTop:24,
    marginRight:24,
  },
  fav_section:{
    alignItems: 'flex-end',
    flex:1
  },
  button_section: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 24
  },
  main_view: {
    flex: 1,
    flexDirection: "column",
  },
  image_view: {
    flex: 1,
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
  text_body: {
    fontFamily:'NotoSansSinhala-Medium',
    fontSize: 14,
    marginTop:8,
    color: colors.title_color,
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
  }
});
