import { Pressable } from "react-native";

export default function OrderButton(){ 
    return <>
    <Pressable onPress={confirmOrder}>
        <Text>Slutför beställning</Text>
    </Pressable>
    </>
}