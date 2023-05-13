import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    view_main: {
        flexDirection:'column',
        backgroundColor: colors.primay,
        borderColor: colors.background_gray,
        borderWidth:1,
        borderRadius:10,
        paddingTop:8,
        marginLeft:16, 
        marginRight:16
    },
    view_pending: {
      flexDirection:'column',
      backgroundColor: colors.background_gray,
      borderColor: colors.background_gray,
      borderWidth:1,
      borderRadius:10,
      paddingTop:8,
      marginLeft:16, 
      marginRight:16
  },
    view: { 
      marginBottom:8,
      flexDirection:'row',
      alignContent:'center',
    },
    colum_view:{
        flexDirection:'column',
        justifyContent:'center',
        paddingLeft:8,
        paddingRight:8,
    },
    colum_view_a:{
        flexDirection:'column',
        flex:1,
        justifyContent:'flex-start'
    },
    icon:{
        width:100,
        height:90,
        borderRadius:4,
    },
    text_title: {
      fontFamily:'NotoSansSinhala-Bold',
      fontSize: 16,
      color: colors.title_color,
      marginTop:8
    },
    text_title_right: {
      fontFamily:'NotoSansSinhala-Bold',
      fontSize: 16,
      textAlign:'right',
      color: colors.title_color,
      marginRight:8,
      marginTop:8
    },
    price_title: {
      fontFamily:'NotoSansSinhala-Regular',
      fontSize: 12,
      textAlign:'right',
      marginTop:8,
      marginRight:8,
      color: colors.dark_gray,
    },
    time_title: {
      fontFamily:'NotoSansSinhala-Regular',
      fontSize: 12,
      marginTop:4,
      color: colors.dark_gray,

    },
    time_title_ago: {
      fontFamily:'NotoSansSinhala-Regular',
      fontSize: 12,
      color: colors.dark_gray,
      alignItems:'flex-end'

    },
    row_section:{
      flexDirection:'row'
    },
    section_ago:{
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        flex:1,
        marginRight:8,
    }
});

export default styles;