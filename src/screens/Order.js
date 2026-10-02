import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { Pressable, View, Text } from "react-native"
import { useOrder } from "../context/OrderContext";

export default function Order() {
    const { order, addMealToOrder } = useOrder;

    return <>
    <View style={styles.content}> 
     <OrderHeader/>
     <OrderList/>
     <OrderButton/>
     </View>
    </>
}