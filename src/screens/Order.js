import OrderButton from "../components/Order/OrderButton";
import OrderHeader from "../components/Order/OrderHeader";
import OrderList from "../components/Order/OrderList";
import { styles } from "../style";
import { View } from "react-native"



export default function Order() {

    return <>
    <View style={styles.content}> 
     <OrderHeader/>
     <OrderList/>
     <OrderButton/>
     </View>
    </>
}