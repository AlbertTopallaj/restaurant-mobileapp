import { Pressable, Text } from "react-native";
import { styles } from "../../../components/Order/OrderButton/OrderButtonStyle";
import { useOrder } from "../../../context/OrderContext";
import Toast from "../Toast/Toast";
import { useEffect, useState } from "react";
import { useToast } from "../../../context/ToastContext";

export default function OrderButton() {
  const { order, placeOrder } = useOrder();
  const { showToast } = useToast();

  function confirmOrder() {
   if (order.length === 0) {
    showToast(
      "Beställningen är tom. Beställ någonting från menyn och testa igen.",
      "error"
    );
    return;
   }
   placeOrder();

   showToast(
    "Beställningen lyckades. Beställningen är färdig om 15 minuter",
    "success"
   );
  }

  return (
    <>
      <Pressable style={styles.confirmOrderButton} onPress={confirmOrder}>
        <Text style={styles.confirmOrderText}>Slutför beställning</Text>
      </Pressable>
    </>
  );
}
