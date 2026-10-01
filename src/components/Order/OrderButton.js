import { Pressable, Text } from "react-native";
import {styles} from "../../style";
import { useOrder } from "../../context/OrderContext";

export default function OrderButton(){ 
    const { meals, placeOrder } = useOrder(); 

    function confirmOrder() {
           if(meals.length === 0) return;

            placeOrder();
        }

    return <>
    <Pressable onPress={confirmOrder}>
        <Text style={styles.pressableText}>Slutför beställning</Text>
    </Pressable>
    </>
}