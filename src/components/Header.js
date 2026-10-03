import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../style.js";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.orderIcon}>
      <Pressable
        style={styles.orderButton}
        onPress={() => navigation.navigate("Order")}
      >
        <Ionicons name="restaurant-outline" size={32} color="black" />
      </Pressable>
    </View>
  );
}
