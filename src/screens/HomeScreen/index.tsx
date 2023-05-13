import React, { useRef, useState } from "react";
import ItemCard from "../../components/Cards/ItemCard";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styles } from "./styles";
import TextField from "../../components/TextField";
import strings from "../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import Tag from "../../components/Cards/Tag";

type homeScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function HomeScreen() {
  const dateGraphRef = useRef();
  const navigation = useNavigation<homeScreenProp>();
  const [category] = useState([
    { label: "සියල්ල", value: "today" },
    { label: "එළවළු වර්ග", value: "yesterday" },
    { label: "පළතුරු වර්ග", value: "last_week" },
    { label: "මස්, බිත්තර හා මුහුදු ආහාර", value: "last_month" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.row_section}>
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
      <ItemCard />
      <View style={{ marginTop: 12 }}></View>
      <ItemCard />
      <View style={{ marginTop: 12 }}></View>
      <ItemCard />
      <View style={{ marginTop: 12 }}></View>
      <ItemCard />
      <View style={{ marginTop: 12 }}></View>
      <ItemCard />
      <View style={{ marginTop: 12 }}></View>
      <ItemCard />
      <View style={{ marginTop: 12 }}></View>
      <ItemCard />
      <View style={{ marginTop: 12 }}></View>
      <ItemCard />
    </View>
  );
}

export default HomeScreen;
