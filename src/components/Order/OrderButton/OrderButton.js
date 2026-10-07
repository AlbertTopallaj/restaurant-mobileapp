import { Pressable, Text } from "react-native";
import { styles } from "../../../components/Order/OrderButton/OrderButtonStyle";
import { useOrder } from "../../../context/OrderContext";
import Toast from "../Toast/Toast";
import { useEffect, useState } from "react";

export default function OrderButton() {
  const { order, placeOrder } = useOrder();
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");

  function confirmOrder() {
    if (order.length === 0) {
      setMessage(
        "Beställningen är tom. Beställ någonting från menyn och testa igen.",
      );
      showToast(true);
    } else {
      setMessage(
        "Beställningen lyckades. Beställningen är färdig om 15 minuter, en kvart",
      );
      placeOrder();
      showToast(true);
    }
  }

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        showToast(false);
      }, 3000);
    }
  }, [toast]);

  return (
    <>
      <Toast message={message} visible={toast} />
      <Pressable style={styles.confirmOrderButton} onPress={confirmOrder}>
        <Text style={styles.confirmOrderText}>Slutför beställning</Text>
      </Pressable>
    </>
  );
}
