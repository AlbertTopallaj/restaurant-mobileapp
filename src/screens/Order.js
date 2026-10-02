import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { Pressable, View, Text, ImageBackground } from "react-native"
import { useOrder } from "../context/OrderContext";

export default function Order() {
    const { order, addMealToOrder } = useOrder();

    return <>
    <ImageBackground
    source={require("../resources/background-no-food.png")}
    style={styles.background}
    resizeMode="cover">
    <View style={styles.content}> 
     <OrderHeader/>
     <OrderList/>
     <OrderButton/>
     </View>
     </ImageBackground>
    </>
}