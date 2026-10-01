import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { Pressable, View } from "react-native"



export default function Order() {

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