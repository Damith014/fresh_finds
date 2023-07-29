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
import EmptyCard from "../../components/Cards/EmptyCard";
import strings from "../../constants/strings";

type homeScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function HomeScreen() {
  const dateTagRef = useRef<any>();
  const navigation = useNavigation<homeScreenProp>();
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<any>([]);
  const [selected, setSelected] = useState("0");
  const [category] = useState([
    { label: "සියල්ල", value: "0" },
    { label: "එළවළු වර්ග", value: "1" },
    { label: "පළතුරු වර්ග", value: "2" },
    { label: "ධාන්‍ය වර්ග", value: "3" },
    { label: "කුළු බඩු වර්ග", value: "4" },
    { label: "කරවල වර්ග", value: "5" },
    { label: "පොල්, DC පොල්, කොප්පරා, පොල්තෙල්", value: "6" },
    { label: "පුවක්, කරැංකා, දුම්කොල, බුලත්", value: "7" },
    { label: "විජලනය / අගය එකතු කළ ආහාර", value: "8" },
    { label: "බයිට් වර්ග හා රස කැවිලි", value: "9" },
    { label: "මස්, බිත්තර හා මුහුදු ආහාර", value: "10" },
    { label: "අල වර්ග", value: "11" },
    { label: "රම්පේ, කරපිංචා, පලා වර්ග ඇතුලු කොල වර්ග", value: "12" },
  ]);
  useEffect(() => {
    getProgram().catch(error => {});
    async function getProgram() {
      await getItems(0);
    }
  }, []);
  async function getItems(tag: number){
    setIsLoading(true);
    let payload = {
      "category" : tag
    }
    let response = await Service.home(payload);
    if (response.status == "100") {
      setItems(response.items)
      setIsLoading(false);

    } else {
      setIsLoading(false);
    }
  }
  function callBack() {
    
  }
  function onPress(tag: string, index: number) {
    dateTagRef.current.scrollToIndex({ animated: true, index, viewPosition:0.5 });
    setSelected(tag);
    getItems(Number(tag));
  }
  const EmptyListMessage = () => {
    return <EmptyCard title={strings.empty_title} body={strings.empty} />;
  };
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
            onPress={() => navigation.navigate("Search")}
            style={styles.search_button}
          >
            <Icon name="search-outline" size={25} color={colors.menu} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tag_section_admin}>
        <FlatList
          ref={dateTagRef}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={category}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <Tag title={item.label} isActive={item.value == selected ? true: false} onPress={() => void onPress(item.value,index)}/>;
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
            return <ItemCard item={item} handleCallback={callBack}/>;
          }}
          nestedScrollEnabled={true}
          ListEmptyComponent={EmptyListMessage}
        />
    </View>
  );
}
export default HomeScreen;
