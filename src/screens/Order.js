import { useState } from "react";
import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { View } from "react-native"


export default function Order() {
    const [meals, setMeals] = useState([]);

    function addMeal(meal) {
        setMeals(prev => [...prev, meal]);
    }

    function placeOrder() {
        setMeals([]);
    }

    return <>
    <View style={styles.content}> 
     <OrderHeader/>
     <OrderList meals={meals} addMeal={addMeal} placeOrder={placeOrder}/>
     <OrderButton/>
     </View>
    </>
}