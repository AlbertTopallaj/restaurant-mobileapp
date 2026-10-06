import { Pressable, Text } from "react-native";
import { styles } from "../../../components/Order/OrderButton/OrderButtonStyle";
import { useOrder } from "../../../context/OrderContext";

export default function OrderButton() {
  const { order } = useOrder();

  function confirmOrder() {
    if (order.length === 0) return;

    placeOrder();
  }

  return (
    <>
      <Pressable style={styles.confirmOrderButton} onPress={confirmOrder}>
        <Text style={styles.confirmOrderText}>Slutför beställning</Text>
      </Pressable>
    </>
  );
}
