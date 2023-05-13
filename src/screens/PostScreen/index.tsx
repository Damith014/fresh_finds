import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { styles } from "./styles";
import colors from "../../constants/colors";
import strings from "../../constants/strings";

function PostScreen() {
  return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => undefined}
            style={styles.back_button}
          >
            <Icon name="arrow-back-outline" size={30} color={colors.dark} />
          </TouchableOpacity>
          <ScrollView
          >
          <View style={styles.header_section}>
            <Text style={styles.header_label_section}>
              {strings.post_header}
            </Text>
          </View>
            <View style={styles.input_section}>
              <Text style={styles.text_title}>{strings.category}</Text>
              <TextField
                placeholder={strings.category}
                isEmpty={true}
                isError={false}
                error={""}
                isText={true}
                value={""}
                onChange={(value) => undefined}
              />
            </View>
            <View style={styles.input_section}>
              <Text style={styles.text_title}>{strings.location}</Text>
              <TextField
                placeholder={strings.location}
                isEmpty={true}
                isError={false}
                isOtp={false}
                error={""}
                isText={true}
                value={""}
                onChange={(value) => undefined}
              />
            </View>
            <View style={styles.input_section}>
              <Text style={styles.text_title}>
                {strings.title}
                {strings.sub_title}
              </Text>
              <TextField
                placeholder={strings.title}
                isEmpty={true}
                isError={false}
                isOtp={false}
                error={""}
                isText={true}
                value={""}
                onChange={(value) => undefined}
              />
            </View>
            <View style={styles.input_section}>
              <Text style={styles.text_title}>{strings.unit_price}</Text>
              <TextField
                placeholder={strings.unit_price}
                isEmpty={true}
                isError={false}
                isOtp={false}
                error={""}
                isText={true}
                value={""}
                onChange={(value) => undefined}
              />
            </View>
            <View style={styles.input_section}>
              <Text style={styles.text_title}>{strings.quntity}</Text>
              <TextField
                placeholder={strings.quntity}
                isEmpty={true}
                isError={false}
                isOtp={false}
                error={""}
                isText={true}
                value={""}
                onChange={(value) => undefined}
              />
            </View>
            <View style={styles.input_section}>
              <Text style={styles.text_title}>{strings.details}</Text>
              <TextField
                placeholder={strings.details}
                isEmpty={true}
                isError={false}
                isOtp={false}
                error={""}
                isText={true}
                value={""}
                onChange={(value) => undefined}
              />
            </View>
            <View style={styles.button_section}>
              <Button
                label={strings.post_button}
                onPress={() => {
                  undefined;
                }}
                isActive={false}
              />
            </View>
          </ScrollView>
        </View>
  );
}

export default PostScreen;
