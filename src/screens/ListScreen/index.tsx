import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../../components/Cards/ItemCard";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";
import { styles } from "./styles";
import strings from "../../constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigation } from "../../navigations/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import EmptyCard from "../../components/Cards/EmptyCard";
import Service from "../../service/Service";
import Spinner from "react-native-loading-spinner-overlay";
import { handleUserStatus } from "../../constants/auth";
import LoginCard from "../../components/Cards/LoginCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Account } from "../../constants/interfaces";
import { Dropdown } from "react-native-element-dropdown";
type listScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function ListScreen(){
    const navigation = useNavigation<listScreenProp>();
    const [isLoading, setIsLoading] = useState(true);
    {/* 0-pending, 1-approved, 2-rejected, 3-finish, 4-cancel */}
    const [category] = useState([
      { label: strings.all, value: "5" },
      { label: strings.posted_ads, value: "0" },
      { label: strings.approve_ads, value: "1" },
      { label: strings.rejected_ads, value: "2" },
      { label: strings.sold_out_ads, value: "3" },
      { label: strings.cancel_ads, value: "4" },
    ]);
    const [items, setItems] = useState<any>([]);
    const [isLogin, setLogin] = useState("0");
    const [selected, setSelected] = useState("5");
    useEffect(() => {
      getProgram().catch(error => {});
      async function getProgram() {
        let type = await handleUserStatus()
        setLogin(type)
        if (type != "0") {
          let user = await AsyncStorage.getItem("account");
          let account = JSON.parse(user ?? '') as Account;
          if (account.type == "2") {
            await getItems(0);
          } else {
            await getItems(Number(account?.id));
          }
        } else {
          setIsLoading(false);
        }
      }
    }, []);
    async function getItems(tag: number){
      setIsLoading(true);
      let payload = {
        "user" : tag
      }
      let response = await Service.get(payload);
      if (response.status == "100") {
        setItems(response.items)
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
  const EmptyListMessage = () => {
    return <EmptyCard title={strings.empty_title} body={strings.empty} />;
  };
  const Item = ({ item }: { item: any }) => (
    selected == "5" ?
    <ItemCard 
      item={item} 
      isManage={true} 
      isPending={item.status == "0"? true : false} 
      handleCallback={callBack}
      showStatus={true}
    />
    : selected == item?.status ?
    <ItemCard 
      item={item} 
      isManage={true} 
      isPending={item.status == "0"? true : false} 
      handleCallback={callBack}
      showStatus={true}
    />
    :
    <></>
  );
  function clickLogin() {
    navigation.navigate('Mobile');
  }
  function clickPost() {
    navigation.navigate('Post');
  }
  async function callBack() {
    if (isLogin != "0") {
      let user = await AsyncStorage.getItem("account");
      let account = JSON.parse(user ?? '') as Account;
      if (account.type == "2") {
        await getItems(0);
      } else {
        await getItems(Number(account?.id));
      }
    } else {
      setIsLoading(false);
    }
  }
    return(
    <View style={styles.container}>
        <View style={styles.row_section}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.menu_button}
          >
            <Icon name="menu-outline" size={30} color={colors.menu} />
          </TouchableOpacity>
          <Text style={styles.text_head}>{strings.my_ads}</Text>
          <Spinner
            visible={isLoading}
            textContent={"Loading..."}
            textStyle={{ color: "#000" }}
          />
        </View>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={{
              color: colors.dark_gray,
              fontWeight: "300",
              fontSize: 12,
              fontFamily: 'NotoSansSinhala-Medium'
            }}
            selectedTextStyle={{
              color: colors.black,
              fontWeight: "600",
              fontSize: 12,
              fontFamily: 'NotoSansSinhala-Medium'
            }}
            inputSearchStyle={{
              height: 40,
              fontSize: 12,
              fontFamily: 'NotoSansSinhala-Medium'
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            itemTextStyle={{
              fontSize: 12,
              fontFamily: 'NotoSansSinhala-Medium'
            }}
            data={category}
            fontFamily= 'NotoSansSinhala-Medium'
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={strings.category}
            searchPlaceholder="Search..."
            value={selected}
            onChange={(item) => {
              setSelected(item.value)
            }}
          />
          {isLogin != "0" &&
            <FlatList
              style={isLogin != "2"? {marginBottom: 80} : {marginBottom: 0}}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Item item={item} />}
              nestedScrollEnabled={true}
              ListEmptyComponent={EmptyListMessage}
            />
          }
          {isLogin == "0" &&
            <LoginCard/>
          }
          {isLogin != "2" &&
            <View style={styles.button_section}>
              <Button
                label={isLogin == "0" ? strings.login : strings.post_ad}
                onPress={() => {
                  isLogin == "0" ? clickLogin() : clickPost();
                }}
                isActive={false}
              />
            </View>
          }
      </View>);
}
export default ListScreen;