import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "../AddMealToOrderButton/AddMealToOrderButtonStyle";
import { Pressable, View } from "react-native";
import { useOrder } from "../../../context/OrderContext";

export default function AddMealToOrderButton({ meal }) {
  const { addMealToOrder } = useOrder();

  return (
    <>
      <View style={styles.buttonLayout}>
        <Pressable style={styles.button} onPress={() => addMealToOrder(meal)}>
          <Ionicons
            name="add-circle-outline"
            size={32}
            color="white"
          ></Ionicons>
        </Pressable>
      </View>
    </>
  );
}
