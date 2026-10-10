import OrderButton from "../../components/Order/OrderButton/OrderButton";
import OrderHeader from "../../components/Order/OrderHeader/OrderHeader";
import OrderList from "../../components/Order/OrderList/OrderList";
import { styles } from "./OrderStyle";
import { View, ImageBackground } from "react-native";
import OrderTotalPrice from "../../components/Order/OrderTotalPrice/OrderTotalPrice";

export default function Order() {
  return (
    <>
      <ImageBackground
        source={require("../../resources/background-no-food.png")}
        style={styles.background}
        resizeMode="cover"
        accessible={false}
      >
        <View style={styles.orderContent}>
          <OrderHeader />
          <OrderList />
          <View style={{ width: "100%", alignItems: "center" }}>
            <OrderTotalPrice />
            <OrderButton />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
