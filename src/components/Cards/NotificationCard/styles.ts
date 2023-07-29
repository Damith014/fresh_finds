import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: colors.primay,
    padding: 4,
    borderRadius: 6,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    flexDirection:'row',
    elevation: 3,
    margin: 8,
    marginLeft:16, 
    marginRight:16,
    minHeight: 100,
    color: colors.primay,
  },
  row_container:{
    flex:1,
    padding: 4,
    flexDirection:'column'
  },
  text_container: {
    marginLeft:10,
    fontSize: 18,
    fontFamily: "NotoSansSinhala-Medium",
    color: colors.dark_gray,
  },
  text_sub: {
    fontSize: 14,
    marginLeft:10,
    fontFamily: "NotoSansSinhala-Ragular",
    color: colors.dark_gray,
    marginTop:4
  },
  text_score: {
    marginRight:8,
    marginLeft:8,
    fontSize: 14,
    fontFamily: "NotoSansSinhala-Ragular",
    color: colors.dark_gray,
    textAlign: 'right',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft:4,
    marginTop:8,
    alignItems:'center'
  },
});
export default styles;
