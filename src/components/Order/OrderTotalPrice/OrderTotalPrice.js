import { useOrder } from "../../../context/OrderContext";
import { styles } from "../OrderTotalPrice/OrderTotalPriceStyle";
import { View, Text } from "react-native";

export default function OrderTotalPrice() {
  const { getTotalPrice } = useOrder();

  return (
    <>
      <View>
        <Text>Totalt: {getTotalPrice()}</Text>
      </View>
    </>
  );
}
