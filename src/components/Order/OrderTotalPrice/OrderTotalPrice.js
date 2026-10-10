import { useOrder } from "../../../context/OrderContext";
import { styles } from "../OrderTotalPrice/OrderTotalPriceStyle";
import { View, Text } from "react-native";

export default function OrderTotalPrice() {
  const { getTotalPrice } = useOrder();

  return (
    <>
      <View>
        <Text accessibilityLabel={`Totala priset för din beställning är ${getTotalPrice()} kr`} style={styles.totalPriceText}>Totalt: {getTotalPrice()} kr</Text>
      </View>
    </>
  );
}
