import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { Pressable, View, Text } from "react-native"
import { useOrder } from "../context/OrderContext";
import { useContext } from "react";



export default function Order() {
    const { order } = useContext(OrderContext)
    return <>
    <View style={styles.content}> 
     <OrderHeader/>
     <OrderList/>
     <Pressable onPress={() => addMeal({ name: "Pasta", price: 89})}>
        <Text>Lägg till testrätt</Text>
     </Pressable>
     <OrderButton/>
     </View>
    </>
}