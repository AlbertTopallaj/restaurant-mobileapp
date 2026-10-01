import { useState } from "react";
import { Pressable, Text } from "react-native";
import {styles} from "../../style";

export default function OrderButton({ meals, placeOrder }){ 

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