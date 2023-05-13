import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    active_button_container: {
        backgroundColor: colors.dark,
        textAlign: "center",
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
        minWidth: 120,
        margin:8
    },
    inactive_button_container: {
        textAlign: "center",
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
        minWidth: 120,
        margin:8,
        backgroundColor: colors.inactive,

    },
    active_text_container: {
        fontWeight: '700',
        fontSize: 16,
        fontFamily:'NotoSansSinhala-Medium',
        color: colors.primay
    },
    inactive_text_container: {
        fontWeight: '300',
        fontSize: 16,
        fontFamily:'NotoSansSinhala-Ragular',
        color: colors.dark
    },
})
export default styles;