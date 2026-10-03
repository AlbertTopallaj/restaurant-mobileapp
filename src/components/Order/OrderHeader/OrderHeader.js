import { Text } from "react-native";
import { styles } from "../OrderHeader/OrderHeaderStyle";

export default function OrderHeader() {
  return (
    <>
      <Text style={styles.orderHeader}>Beställ mat</Text>
    </>
  );
}
