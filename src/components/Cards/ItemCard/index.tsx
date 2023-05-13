import * as React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import strings from "../../../constants/strings";
import Button from "../../Button";

type Props = {
  title?: string;
  hospital?: string;
  date?: string;
  price?: string;
  patient?: string;
  invoice?: string;
  service?: string;
  onPress?: any;
  onPressView?: any;
  isManage?:boolean;
  isSoldOut?:boolean;
  isPending?:boolean;
};

export default function ItemCard({
  title,
  hospital,
  date,
  price,
  patient,
  invoice,
  service,
  onPress,
  onPressView,
  isManage,
  isSoldOut,
  isPending
}: Props) {
  return (
    <View style={isPending? styles.view_pending: styles.view_main}>
      <View style={styles.view}>
        <View style={styles.colum_view}>
          <Image
            source={{
              uri: "https://i.ikman-st.com/gottukoll-mitti-tog-vshyen-lbaadiy-haek-for-sale-kalutara/c404c04f-bf1f-4a01-94c5-11e3e0ccdfe4/780/585/fitted.jpg",
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.colum_view_a}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%", alignItems: "flex-start" }}>
              <Text style={styles.text_title}>{strings.sample_title}</Text>
              <View style={styles.row_section}>
                <Text style={styles.time_title}>Ratnapura, </Text>
                <Text style={styles.time_title}>පලා වර්ග</Text>
              </View>
              <Text style={styles.price_title}>100 {strings.price_per}</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.text_title_right}>RS 100.00</Text>
            </View>
          </View>
          <View style={styles.section_ago}>
            <Text style={styles.time_title_ago}>24 minutes ago</Text>
          </View>
        </View>
      </View>
      {isManage &&
        <View style={styles.colum_view_a}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex:1, alignItems: "flex-start", marginRight:4 }}>
              <Button
                label={strings.reject}
                isActive={false}
                isReject={true}
                onPress={() => {
                  undefined;
                }}
              />
            </View>
            <View style={{flex:1,  alignItems: "flex-start", marginLeft:4 }}>
              <Button
                label={strings.approve}
                isActive={false}
                onPress={() => {
                  undefined;
                }}
              />
            </View>
          </View>
        </View>
      }
      {isSoldOut &&
        <View style={styles.colum_view_a}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex:1, alignItems: "flex-start", marginRight:4 }}>
              {/* <Button
                label={strings.reject}
                isActive={false}
                isReject={true}
                onPress={() => {
                  undefined;
                }}
              /> */}
            </View>
            <View style={{flex:1,  alignItems: "flex-start", marginLeft:4 }}>
              <Button
                label={strings.sold_out}
                isActive={false}
                onPress={() => {
                  undefined;
                }}
              />
            </View>
          </View>
        </View>
      }
    </View>
  );
}
