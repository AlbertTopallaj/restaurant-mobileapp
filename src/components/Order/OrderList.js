import { useContext } from "react";
import {styles} from "../../style";
import { View, Text } from "react-native"

export default function OrderList({ meals, addMeal, placeOrder }) {
    return <>
    <View style={styles.content}>
        <FlatList></FlatList>
   
    </View>
    </>
}