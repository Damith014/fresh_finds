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

type listScreenProp = StackNavigationProp<RootNavigation, "Drawer">;
function ListScreen(){
    const navigation = useNavigation<listScreenProp>();
    return(<View style={styles.container}>
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
              {/* <Icon name="search-outline" size={25} color={colors.menu} /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tag_section_admin}>
        </View>
        <View style={{ marginTop: 12 }}></View>
        <ItemCard isSoldOut={true}/>
        <View style={{ marginTop: 60 }}></View>
        <ItemCard isPending={true}/>
      </View>);
}
export default ListScreen;