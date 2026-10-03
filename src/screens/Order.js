import OrderButton from "../components/Order/OrderButton/OrderButton";
import OrderHeader from "../components/Order/OrderHeader/OrderHeader";
import OrderList from "../components/Order/OrderList/OrderList";
import { styles } from "../style";
import { View, ImageBackground } from "react-native";
import OrderTotalPrice from "../components/Order/OrderTotalPrice/OrderTotalPrice";

export default function Order() {
  return (
    <>
      <ImageBackground
        source={require("../resources/background-no-food.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <OrderHeader />
          <OrderList />
          <OrderTotalPrice />
          <OrderButton />
        </View>
      </ImageBackground>
    </>
  );
}
