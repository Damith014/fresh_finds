import React from "react";
import {Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styles } from "./styles";
import strings from "../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
type listScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function PolicyScreen() {
  const navigation = useNavigation<listScreenProp>();
  return (
    <View style={styles.container}>
      <View style={styles.row_section}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menu_button}
        >
          <Icon name="menu-outline" size={30} color={colors.menu} />
        </TouchableOpacity>
        <Text style={styles.text_head}>{strings.policy}</Text>
        <View style={styles.search_section}>
          <TouchableOpacity
            onPress={() => undefined}
            style={styles.search_button}
          ></TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ marginLeft: 24, marginRight: 24 }}>
          <Text style={styles.text_title}>
            රහස්‍යතා ප්‍රතිපත්තිය (Privacy Policy)
          </Text>
          <Text style={styles.text_sub}>
            ග්‍රීන් ෆුඩ් සොලුසන්ස් යනු, සේවාවන් ලබාදෙන ආයතනයකි. මෙම සෙවාවන් ලබා
            දීමෙදි වඩාත් ඵලදායි සහ ආරක්ෂාකාරි සේවාවක් ලබාදීම සදහා පුද්ගලික
            තොරතුරැ එකතු කිරීම, බෙදා ගැනීම සහ භාවිතා කිරීම අත්‍යවශ්‍ය කාරණයක්
            වේ.{" "}
          </Text>

          <Text style={{ ...styles.text_title, marginTop: 10 }}>
            එකතුව (Collection)
          </Text>
          <Text style={styles.text_sub}>
            ග්‍රීන් ෆුඩ් සොලුසන්ස් හි ඔබ පළකරන තොරතුරැ ප්‍රසිද්ධියේ පවතියි. ඔබ
            විසින් අප හට ඔබගේ පෞද්ගලික තොරතුරැ ලබා දීමට තීරණය කළේ නම්, එම
            තොරතුරැ අපගේ සේවාව තුල ඒකමතිකව ස්ථාවර කර තැබීම හා මාරැ කිරීම සිදු කල
            හැකිය. මෙහිදි අප විසින් ඔබගේ පහත පෞද්ගලික තොරතුරු ඒකරාශි කර තබා
            ගන්නෙමු.{" "}
          </Text>
          <Text style={styles.text_sub}>
            {`* ඔබගේ නම, දුරකථන සම්බන්ධතා තොරතුරු, ඊ මේල් ලිපිනයන්.\n`}
            {`* පරිගණක පිවිසුම් දත්ත, පිටුවේ නැරඹුම් සංඛ්‍යා ලේඛන.\n`}
            {`* අනෙකුත් තොරතුරු, ග්‍රීන් ෆුඩ් සොලුසන්ස් භාවිතා කරන්නන්ගේ IP ලිපිනය ඇතුලුව සම්මත වෙබ් ඇතුලුවිමේ තොරතුරු.\n`}
          </Text>
          <Text style={{ ...styles.text_title, marginTop: 10 }}>
            භාවිතාව (Use)
          </Text>
          <Text style={styles.text_sub}>
            අප විසින් භාවිතා කරන්නන්ගේ පුද්ගලික තොරතුරු භාවිතා කරනු ලබන්නේ,
          </Text>
          <Text style={styles.text_sub}>
            {`* අපගේ සේවාවන් සැපයීම සඳහා.\n`}
            {`* මතභේද විසඳීම, ගැටළු නිරාකරණය කිරීම, ගාස්තු එකතු කිරීම.\n`}
            {`* වඩාත් ඵලදායි සහ ආරක්ෂාකාරී ලෙස වෙළඳාම දිරිමත් කර අපගේ ප්‍රතිපත්ති බලාත්මක කිරීම.\n`}
            {`* අපගේ සේවාව සඳහා ඇති උනන්දුව මැන බලන්න.\n`}
            {`* භාවිතාකරන්නන්ගේ අත්දැකීම් කැමති ආකාරයකට සැකසීම.\n`}
            {`* අපගේ සේවාවන් ගුණාත්මක භාවයෙන් වැඩි දියුණු කිරීම සහ යාවත්කාලීන කරවීම් පිළිබඳව සේවාව භාවිතා කරන්නන් දැනුවත් කිරීම.\n`}
            {`* අප තොරතුරු රැස් කරන විට විස්තර කර ඇති පරිදි පරිශීලකයන් වෙනුවෙන් අනිකුත් දේවල් කිරීම.\n`}
          </Text>
          <Text style={{ ...styles.text_title, marginTop: 10 }}>
            හෙළිදරව් කිරීම (Disclosure)
          </Text>
          <Text style={styles.text_sub}>
            පරිශීලකයින්ගේ පැහැදිලි අවසරයක් නොමැතිව අප විසින් අපගේ පරිශීලකයන්ගේ
            පෞද්ගලික තොරතුරු අලෙවිකරණ අභිමතාර්ථයක් උදෙසා තුන්වන පාර්ශ්වයන්ට
            විකිණීම හෝ කුලියට දීම සිදු නො කරමු. නීතිමය අවශ්‍යතා වලට ප්‍රතිචාර
            දැක්වීමට පළ කිරීමක් සම්බන්ධව අනෙක් පාර්ශ්වයන්ගේ අයිතීන් උල්ලංඝනය කරන
            බවට වන ප්‍රකාශයන්ට ප්‍රතිචාර දැක්වීමට, කිසියම් කෙනෙකුගේ දේපළ හෝ
            ආරක්ෂාව වෙනුවෙන් නීතිමය අවශ්‍යතාවයන් සඳහා මෙම පෞද්ගලික තොරතුරු
            අනාවරණය කරනු ලබයි.
          </Text>
          <Text style={{ ...styles.text_title, marginTop: 10 }}>
            සන්නිවේදන සහ ඊ මේල් මෙවලම් (Communication and email tools)
          </Text>
          <Text style={styles.text_sub}>
            පාරිභෝගික භාණ්ඩ හා සේවා අලෙවි කිරිම සඳහා සන්නිවේදනයන් තෙවන පාර්ශව
            කරුවන් වෙනුවෙන් ලැබීමට ඔබ එකඟ වී ඇති අතර එසේ නොමැතිනම් එවැනි
            සන්නිවේදනයක් ලබා නොගැනීමට ඔබ කැමති බව ඔබ අපට දැනුම් දීම කළ යුතුවේ.
            ඔබ අපගෙන් අලෙවිකරණ සන්නිවේදනයක් ලබා ගැනීමට අකමැතිනම්, සන්නිවේදනය සමඟ
            සපයා ඇති උපදෙස් අනුගමනය කරන්න. අනෙකුත් භාවිතාකරන්නන්ගෙන් එන අනවශ්‍ය
            සන්නිවේදන සහ ඊ මේල් වාර්තා කිරීම සඳහා කරුණාකර පාරිභෝගික සහාය අමතන්න.
          </Text>
          <Text style={{ ...styles.text_title, marginTop: 10 }}>
            සුරක්ෂිතතාව (Security)
          </Text>
          <Text style={styles.text_sub}>
            {" "}
            ඔබගේ පුද්ගලික තොරතුරු අනවසර ප්‍රවේශ වීම් සහ හෙළි කිරීම් මගින් ආරක්ෂා
            කිරීමට අපි බොහෝ මෙවලම් (මුරපද, ගුප්තකේත, එන්ක්‍රිප්ෂන්) ප්‍රමාණයක්
            භාවිතා කරනු ලබයි. ඔබ විසින් හෙළිදරව් කිරීමට බලාපොරොත්තු වන තොරතුරු
            හැර අනිකුත් සියලුම පුද්ගලික විද්‍යුත් තොරතුරු සේවාව විසින් රහසිගතව
            තබා ගනු ඇත. සේවාව හරහා අන් අයගේ සම්බන්ධතා තොරතුරු අනාවරණය කිරීම
            පිළිගත නොහැකිය. ඔබ රටේ පවතින නීතියට හෝ සේවාවේ භාවිත නියමයන් උල්ලංඝනය
            කරන්නේ නම්, ඔබේ පුද්ගලික තොරතුරු මත ඔබේ පෞද්ගලිකත්ව අයිතිය අහිමි වේ.
          </Text>
          <Text style={{ ...styles.text_title, marginTop: 10 }}>
            සම්බන්ධතා තොරතුරු (Contact details)
          </Text>
          <Text style={styles.text_sub}>
            පාරිභෝගික සේවා ඊ මේල් ලිපිනය; solutionsgreenfood@gmail.com
          </Text>
          <Text style={{ ...styles.text_title, marginTop: 10 }}>
            දායක නොවන තොරතුරු (Unsubscribe information)
          </Text>
          <Text style={styles.text_sub}>
            ඕනෑම අවස්ථාවක ඔබගේ තොරතුරු පරික්ෂා කිරීමට හෝ ඉවත් කිරීමට අවශ්‍ය නම්
            කරුණාකර ඒ බව අපගේ solutionsgreenfood@gmail.com ඔස්සේ දැනුම් දෙන්න.
            නැතහොත් 076 27 27 27 8 හරහා අපව සම්බන්ධ වන්න. මීට අමතරව, ග්‍රීන්
            ෆුඩ් සොලුසන්ස් යෙදුම (App) එක හරහා, ප්‍රධාන මෙනු එක හරහා, මාගේ
            පැතිකඩ ඔස්සේ ඔබට එය සිදු කල හැකිය.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
export default PolicyScreen;
