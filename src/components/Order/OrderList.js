import { useOrder } from "../../context/OrderContext"; 
import {styles} from "../../style";
import { View, Text, FlatList } from "react-native"

export default function OrderList() {
    const { meals } = useOrder();
    return <>
    <View style={styles.content}>
        <FlatList
        data={meals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            </View>
        )}
        ListEmptyComponent={<Text>Inga rätter har lagts in.</Text>}
        />
    </View>
    </>
}