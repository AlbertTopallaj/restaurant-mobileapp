import { Text, View } from "react-native";
import { styles } from "../Toast/ToastStyle";

export default function Toast({ message, visible }) {
  if (!visible) {
    return;
    // dont show toast
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.toast}>
          <Text style={styles.icon}></Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      </View>
    </>
  );
}
