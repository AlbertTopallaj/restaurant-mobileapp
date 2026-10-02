import { useOrder } from "../context/OrderContext";


export default function OrderTotalPrice(){
    const { getTotalPrice } = useOrder();

    return <>
    <View>
        <Text>{getTotalPrice()}</Text>
    </View>
    </>
}