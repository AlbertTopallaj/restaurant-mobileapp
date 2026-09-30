import { Pressable } from "react-native";

export default function OrderButton(){ 

    function confirmOrder() {
        
    }


    return <>
    <Pressable onPress={confirmOrder}>
        <Text>Slutför beställning</Text>
    </Pressable>
    </>
}