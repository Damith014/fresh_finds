import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    dark: {
      width: '100%', 
      minHeight: 45,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor:colors.dark
    },
    geen: {
      marginTop:8,
      marginBottom:8,
      marginRight:2,
      textAlign:'center',
      color:colors.dark
    },
    red: {
      marginTop:8,
      marginBottom:8,
      marginRight:2,
      textAlign:'center',
      color:colors.pure_red
    },
    gray: {
      marginTop:8,
      marginBottom:8,
      marginRight:2,
      textAlign:'center',
      color:colors.dark_gray
    },
    label_text: {
      fontSize: 16,
      color: colors.primay,
      fontFamily:'NotoSansSinhala-Medium',
    },
    section_label_text: {
      fontSize: 16,
      color: colors.primay,
      fontWeight: "700",
    },
    section_false_label_text: {
      fontSize: 16,
      color: colors.primay,
      fontWeight: "300",
    },
    login_background:{
        width: '100%', 
        minHeight: 51,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: 'relative'
    },
    section_background:{
        width: '100%', 
        minHeight: 45,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: 'relative'
    },
    login_background_small:{
        width: '60%', 
        minHeight: 35,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: 'relative'
    }
});

export default styles;