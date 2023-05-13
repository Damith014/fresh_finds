import * as React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import colors from "../../constants/colors";
import { useState } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import { CountryItem } from "react-native-country-codes-picker/types/Types";

type Props = {
  placeholder?: string;
  isEmpty?: boolean;
  isError?: boolean;
  error?: string;
  value?: string;
  isText?: boolean;
  isContry?: boolean;
  isOtp?: boolean;
  onChange: (text: string) => void;
};

export default function TextField({
  placeholder,
  isEmpty,
  isError,
  error,
  value,
  isText,
  isContry,
  isOtp,
  onChange,
}: Props) {
  const [show, setShow] = useState(false);
  const [country, setCountryCode] = useState<CountryItem>({
    code: "LK",
    dial_code: "+94",
    flag: "🇱🇰",
    name: {
      bg: "Шри Ланка",
      by: "Шры Ланка",
      cn: "斯里兰卡",
      cz: "Srí Lanka",
      de: "Sri Lanka",
      ee: "Sri Lanka",
      el: "Σρι Λάνκα",
      en: "Sri Lanka",
      es: "Sri Lanka",
      fr: "Sri Lanka",
      he: "סרי לנקה",
      it: "Sri Lanka",
      jp: "スリランカ",
      nl: "Sri Lanka",
      pl: "Sri Lanka",
      pt: "Sri Lanca",
      ro: "Sri Lanka",
      ru: "Шри-Ланка",
      ua: "Шрі Ланка",
      zh: "斯里蘭卡",
    },
  });
  return (
    <View>
      {isText && (
        <View style={isError ? styles.text_error_view : styles.text_view}>
          <TextInput
            placeholder={placeholder}
            value={value}
            style={isEmpty ? styles.text_placeholder : styles.text}
            autoCapitalize="none"
            returnKeyType={"next"}
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={onChange}
          />
        </View>
      )}
      {isOtp && (
        <View style={isError ? styles.text_error_view : styles.otp_view}>
          <TextInput
            placeholder={placeholder}
            value={value}
            style={styles.text_otp}
            autoCapitalize="none"
            returnKeyType={"next"}
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={onChange}
          />
        </View>
      )}

      {isContry && (
        <View style={styles.input_container}>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Text style={styles.label_contry}>
              {country.flag} {country.dial_code}
            </Text>
            <CountryPicker
              lang={"en"}
              style={{
                textInput: {
                  height: 80,
                  borderRadius: 0,
            }}
              }
              searchMessage={"Search your contry"}
              pickerButtonOnPress={(item) => {
                setCountryCode(item);
                setShow(false);
              }}
              show={show}
            />
          </TouchableOpacity>
          <TextInput
            placeholder={placeholder}
            autoCapitalize="none"
            returnKeyType={"done"}
            autoCorrect={false}
            value={value}
            style={isEmpty ? styles.text_placeholder : styles.text}
            onChangeText={onChange}
          />
        </View>
      )}
      {isError && <Text style={styles.text_error}>{error}</Text>}
    </View>
  );
}
