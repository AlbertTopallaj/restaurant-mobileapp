import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "../AddMealToOrderButton/AddMealToOrderButtonStyle";
import { Pressable, View } from "react-native";
import { useOrder } from "../../../context/OrderContext";
import { useToast } from "../../../context/ToastContext";

export default function AddMealToOrderButton({ meal }) {
  const { addMealToOrder } = useOrder();
  const { showToast } = useToast();

  function handleAddMeal() {
    addMealToOrder(meal);
    showToast("Rätten lades till i beställningen");
  }

  return (
    <>
      <View style={styles.buttonLayout}>
        <Pressable
          style={styles.button}
          onPress={() => {handleAddMeal(); }}
        >
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
