import { Text, View } from "react-native";
import { styles } from "../Toast/ToastStyle";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function Toast({ message, type, visible }) {
  if(!visible) {
    return null;
  }


  let iconName;
  let iconColor;

  if(type === "success") {
    iconName = "checkmark-circle";
    iconColor = "#4CAF50";
  } else if (type === "error"){
    iconName = "close-circle";
    iconColor = "#E53935";
  } else {
    iconName = "information-circle";
    iconColor = "#2196F3";
  }


  return (
    <>
      <View style={styles.container}>
        <View style={styles.toast}>
          <Ionicons
          name={iconName}
          size={24}
          color={iconColor}
          />

        <Text style={styles.message}>{message}</Text>
      </View>
      </View>
    </>
  );
}
