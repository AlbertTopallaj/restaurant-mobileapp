import { useState } from "react";
import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { View } from "react-native"
import { add } from "react-native/types_generated/Libraries/Animated/AnimatedExports";


export default function Order() {

    return <>
    <View style={styles.content}> 
     <OrderHeader/>
     <OrderList/>
     <OrderButton/>
     </View>
    </>
}