import { useContext } from "react";
import { useOrder } from "../../context/OrderContext"; 
import {styles} from "../../style";
import { View, Text, FlatList, Image } from "react-native"

export default function OrderList() {
    const {order, deleteMealFromOrder } = useOrder();
    
    return <>
    <View style={styles.content}>
        <FlatList
        data={order}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View
                                           style={{
                                               backgroundColor: "#ffffffcc",
                                               padding: 12,
                                               borderRadius: 10,
                                               marginVertical: 10,
                                               width: "80%",
                                               alignSelf: "center",
                                               flexDirection: "row",
                                               alignItems: "center",
                                               gap: 20
                                           }}
                                       >
                                           <Image
                                               source={mealImages[cleanImageName]}
                                               style={{ width: 80, height: 80, borderRadius: 8 }}
                                           />
           
                                           <View style={{ flexShrink: 1 }}>
                                           <Text
                                               style={{
                                                   fontSize: 18,
                                                   fontFamily: "serif",
                                                   fontWeight: "bold",
                                                   flexWrap: "wrap",
                                                   maxWidth: 180,   
                                               }}
                                           >
                                               {item.name}
                                           </Text>
           
                                           <Text style={{ fontSize: 16 }}>
                                               {item.price ? `${item.price} kr` : "Pris saknas"}
                                           </Text>
                                       </View>
           
                                       </View>
        )}
        ListEmptyComponent={<Text>Inga rätter har lagts in.</Text>}
        />
    </View>
    </>
}