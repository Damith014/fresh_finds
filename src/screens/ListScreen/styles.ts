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
});
