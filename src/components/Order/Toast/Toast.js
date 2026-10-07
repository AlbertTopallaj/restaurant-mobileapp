import { Text } from "react-native";
import { styles } from "../Toast/ToastStyle";

export default function Toast({ message, visible }) {
  if (!visible) {
    return;
    // dont show toast
  }

  return (
    <>
      <View>
        <Text>{message}</Text>
      </View>
    </>
  );
}
