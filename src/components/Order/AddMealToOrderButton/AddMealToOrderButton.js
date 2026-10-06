import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./AddMealToOrderButtonstyle";
import { Pressable } from "react-native";

export default function AddMealToOrderButton() {
  return (
    <>
      <View style={styles.buttonLayout}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Order")}
        >
          <Ionicons
            name="add-circle-outline"
            size={24}
            color={black}
          ></Ionicons>
        </Pressable>
      </View>
    </>
  );
}
