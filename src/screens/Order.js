import { useState } from "react";
import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { View } from "react-native"
import { add } from "react-native/types_generated/Libraries/Animated/AnimatedExports";


export default function Order() {
    const [meals, setMeals] = useState([]);

    function addMeal(meal) {
        setMeals(prev => [...prev, meal]);
    }

    function removeMeal(index) {
        setMeals(prev => prev.filter((_, i) => i !== index));
    }

    function placeOrder() {
        setMeals([]);
    }

    return <>
    <View style={styles.content}> 
     <OrderHeader/>
     <OrderList meals={meals} addMeal={addMeal} placeOrder={placeOrder}/>
     <OrderButton meals={meals} addMeal={addMeal} placeOrder={placeOrder}/>
     </View>
    </>
}