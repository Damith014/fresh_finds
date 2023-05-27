import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../../components/Cards/ItemCard";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styles } from "./styles";
import strings from "../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import EmptyCard from "../../components/Cards/EmptyCard";
import Service from "../../service/Service";
import Spinner from "react-native-loading-spinner-overlay";
import { handleUserStatus } from "../../constants/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Account } from "../../constants/interfaces";
type listScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function SearchScreen() {
  const navigation = useNavigation<listScreenProp>();
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<any>([]);
  const [text, setText] = useState('');

  async function clickSearch(type: string) {
    setIsLoading(true);
    let payload = {
      "tag": type,
      "text": text
    };
    let response = await Service.search(payload);
    if (response.status == "100") {
      setItems(response.items)
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
    setIsLoading(false);
  }
  const EmptyListMessage = () => {
    return <EmptyCard title={strings.empty_title} body={strings.empty} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.row_section}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back_button}
        >
          <Icon name="arrow-back-outline" size={30} color={colors.dark} />
        </TouchableOpacity>

        <TextInput 
          style={styles.search_box}
          placeholder={strings.search}
          clearButtonMode = 'while-editing'
          value={text}
          onChangeText={(value)=>setText(value)}
        />

        <TouchableOpacity
          onPress={() => clickSearch('filter')}
          style={styles.back_button}
        >
            <Icon name="ios-filter-sharp" size={24} color={colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => clickSearch('location')}
          style={styles.back_button}
        >
            <Icon name="md-location-sharp" size={24} color={colors.dark} />
        </TouchableOpacity>
        <Spinner
          visible={isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#000" }}
        />
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ItemCard
              item={item}
              isManage={true}
              isPending={item.status == "5" ? true : false}
            />
          );
        }}
        nestedScrollEnabled={true}
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  );
}
export default SearchScreen;
