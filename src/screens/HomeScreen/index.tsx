import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../../components/Cards/ItemCard";
import { FlatList, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styles } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import Tag from "../../components/Cards/Tag";
import Service from "../../service/Service";

type homeScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function HomeScreen() {
  const dateGraphRef = useRef();
  const navigation = useNavigation<homeScreenProp>();
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<any>([]);
  const [category] = useState([
    { label: "සියල්ල", value: "0" },
    { label: "එළවළු වර්ග", value: "1" },
    { label: "පළතුරු වර්ග", value: "2" },
    { label: "පලා වර්ග", value: "3" },
    { label: "අල වර්ග", value: "4" },
    { label: "ධාන්‍ය වර්ග", value: "5" },
    { label: "කුළු බඩු වර්ග", value: "6" },
    { label: "කරවල වර්ග", value: "7" },
    { label: "මස්, බිත්තර හා මුහුදු ආහාර", value: "8" },
    { label: "කෙටි ආහාර", value: "9" },
    { label: "බයිට් වර්ග හා රස කැවිලි", value: "10" },
    { label: "පොල්, DC පොල්, කොප්පරා, පොල්තෙල්", value: "11" },
    { label: "පුවක්, කරැංකා, දුම්කොල, බුලත්", value: "12" },
  ]);
  useEffect(() => {
    getProgram().catch(error => {});
    async function getProgram() {
      setIsLoading(true);
      let payload = {
        "category" : 0
      }
      let response = await Service.home(payload);
      if (response.status == "100") {
        setItems(response.items)
        setIsLoading(false);

      } else {
        setIsLoading(false);
      }
    }
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.row_section}>
          <Spinner
            visible={isLoading}
            textContent={"Loading..."}
            textStyle={{ color: "#000" }}
          />
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menu_button}
        >
          <Icon name="menu-outline" size={30} color={colors.menu} />
        </TouchableOpacity>
        <View style={styles.search_section}>
          <TouchableOpacity
            onPress={() => undefined}
            style={styles.search_button}
          >
            {/* heart-sharp */}
            <Icon name="search-outline" size={25} color={colors.menu} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tag_section_admin}>
        <FlatList
          ref={dateGraphRef}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={category}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <Tag title={item.label} isActive={index == 0? true: false} />;
          }}
          nestedScrollEnabled={true}
        />
       </View>
      <View style={{ marginTop: 12 }}></View>
      <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <ItemCard item={item} />;
          }}
          nestedScrollEnabled={true}
        />
    </View>
  );
}
export default HomeScreen;
