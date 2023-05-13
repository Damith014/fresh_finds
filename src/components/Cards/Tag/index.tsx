import * as React from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";
import styles from "./styles"

type Props = {
    onPress?: any;
    title: string;
    isActive: boolean;
};

export default function Tag({
    onPress,
    title,
    isActive,
}: Props) {
    return (
        <TouchableOpacity 
        onPress={onPress} 
        style={isActive? styles.active_button_container:styles.inactive_button_container} >
            <Text 
            style={isActive? styles.active_text_container:styles.inactive_text_container}>{title}</Text>
        </TouchableOpacity>
    );
}
