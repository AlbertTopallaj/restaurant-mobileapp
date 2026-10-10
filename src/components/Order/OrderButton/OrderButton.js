import { Pressable, Text } from "react-native";
import { styles } from "../../../components/Order/OrderButton/OrderButtonStyle";
import { useOrder } from "../../../context/OrderContext";
import { useState } from "react";
import { useToast } from "../../../context/ToastContext";
import OrderSuccessModal from "../OrderSuccessModal/OrderSuccessModal";

export default function OrderButton() {
  const { order, placeOrder } = useOrder();
  const { showToast } = useToast();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function confirmOrder() {
   if (order.length === 0) {
    showToast(
      "Beställningen är tom. Beställ någonting från menyn och testa igen.",
      "error"
    );
    return;
   }
   placeOrder();
   setShowSuccessModal(true);
  }

  return (
    <>
      <Pressable accessibilityLabel="Slutför beställning" accessibilityHint="Skickar din beställning" style={styles.confirmOrderButton} onPress={confirmOrder}>
        <Text style={styles.confirmOrderText}>Slutför beställning</Text>
      </Pressable>

      <OrderSuccessModal
      visible={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}
