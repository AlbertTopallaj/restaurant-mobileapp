import { useState } from "react";
import { Pressable, Text } from "react-native";

export default function OrderButton(){ 

    const [order, setOrder] = useState([]);

    function confirmOrder() {
           if(order.length === 0) {
            return
           }
        }

    return <>
    <Pressable onPress={confirmOrder}>
        <Text>Slutför beställning</Text>
    </Pressable>
    </>
}