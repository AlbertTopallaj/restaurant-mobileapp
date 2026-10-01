import { useState } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../style";

export default function OrderButton(){ 

    const [order, setOrder] = useState([]);

    function confirmOrder() {
           if(order.length === 0) {
            return
           }
        }

    return <>
    <Pressable onPress={confirmOrder}>
        <Text style={styles.pressableText}>Slutför beställning</Text>
    </Pressable>
    </>
}