import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate("Order")}
      >
        <Ionicons name="restaurant-outline" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
