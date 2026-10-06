import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { styles } from "../style";
import {useState, useEffect} from "react";
import StarRating from "../components/StarRating.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ProductInfo({ route }) {
    const { product } = route.params;
    const [rating, setRating] = useState(0);

    const saveRating = async (n) => {
        setRating(n);
        await AsyncStorage.setItem(`rating_${product.id}`, n.toString());
    }

    useEffect(() => {
        const loadRating = async () => {
            const savedRating = await AsyncStorage.getItem(`rating_${product.id}`);
            if (savedRating !== null) {
                setRating(Number(savedRating));
            }
        }
        loadRating();
    }, []);

    return (
        <ImageBackground
            source={require("../resources/background-no-food.png")}
            style={styles.background}
        >
            <View style={{ paddingTop: 50, alignItems: "center" }}></View>
            <ScrollView contentContainerStyle={{ padding: 110, alignItems: "center" }}>
                
                <Text style={[styles.pressableText, { fontSize: 27, marginBottom: 20}]}>
                    {product.name}
                </Text>

                <Image
                    source={product.image}
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: 15,
                        marginBottom: 20,
                    }}
                />

                <Text style={{ fontSize: 22, marginBottom: 10 }}>
                    Pris: {product.price} kr
                </Text>

                {product.content && (
                    <Text
                        style={{
                            fontSize: 18,
                            textAlign: "center",
                            lineHeight: 26,
                            backgroundColor: "#ffffffcc",
                            padding: 15,
                            borderRadius: 10,
                            width: "90%",
                        }}
                    >
                        {product.content}
                    </Text>
                )}
           <StarRating key={rating} start={rating} onChange={saveRating}/>
            </ScrollView>
        </ImageBackground>
    );
}