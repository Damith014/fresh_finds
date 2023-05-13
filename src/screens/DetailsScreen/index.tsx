import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button";
import { styles } from "./styles";
import colors from "../../constants/colors";
import strings from "../../constants/strings";
import ItemCard from "../../components/Cards/ItemCard";

function DetailsScreen() {
  const [images] = useState([
    {
      src: "https://i.ikman-st.com/gottukoll-mitti-tog-vshyen-lbaadiy-haek-for-sale-kalutara/40caf5f5-eb03-4da8-a090-4678579348fc/780/585/fitted.jpg",
      id: "12345",
    },
    {
      src: "https://i.ikman-st.com/gottukoll-mitti-tog-vshyen-lbaadiy-haek-for-sale-kalutara/424ef433-7010-4321-b1c7-f37c42ae473f/780/585/fitted.jpg",
      id: "12346",
    },
    {
      src: "https://i.ikman-st.com/gottukoll-mitti-tog-vshyen-lbaadiy-haek-for-sale-kalutara/c404c04f-bf1f-4a01-94c5-11e3e0ccdfe4/780/585/fitted.jpg",
      id: "12347",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.main_view}>
        <View style={styles.row_section}>
            <TouchableOpacity onPress={() => undefined} style={styles.back_button}>
            <Icon name="arrow-back-outline" size={30} color={colors.dark} />
            </TouchableOpacity>
            <View style={styles.fav_section}>
            <TouchableOpacity onPress={() => undefined} style={styles.fav_button}>
            {/* heart-sharp */}
            <Icon name="heart-outline" size={30} color={colors.dark} />
            </TouchableOpacity>
            </View>
        </View>

        <View style={styles.image_view}></View>
        <View style={styles.details_view}>
            <View style={styles.input_section}>
              <Text style={styles.text_title}>{strings.sample_title}</Text>
              <Text style={styles.text_body}>{strings.sample_content}</Text>
            </View>
            <View style={styles.price_section}>
                <View style={styles.row_section}>
                    <Text style={styles.text_title}>RS 55.00</Text>
                    <Text style={styles.price_title}> {strings.price_per}</Text>
                </View>
                <View style={styles.row_section}>
                    <Text style={styles.time_title}>23 Apr 2.34 PM</Text>
                </View>
                <View style={styles.row_section}>
                    <Text style={styles.time_title}>{strings.location}:</Text>
                    <Text style={styles.time_title}> Ratnapura</Text>
                </View>
            </View>
          <View style={styles.button_section}>
            <Button
              label={strings.call}
              onPress={() => {
                undefined;
              }}
              isActive={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;
