import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1 ,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.primay
    },
    label:{
        fontSize:24,
        textAlign:'center',
        color: colors.dark,
        fontFamily:'NotoSansSinhala-SemiBold',
    }
});