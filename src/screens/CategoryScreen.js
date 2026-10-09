import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { meals } from "../data/Meals";
import { styles } from "../style";
import OrderButtonDirector from "../components/Order/OrderButtonDirector/OrderButtonDirector"

const mealImages = {
  "kebabrulle.png": require("../resources/meals/kebabrulle.png"),
  "kebabtallrik_med_pommes.png": require("../resources/meals/kebabtallrik_med_pommes.png"),
  "kebabtallrik_med_ris.png": require("../resources/meals/kebabtallrik_med_ris.png"),

  "kebabpizza.png": require("../resources/meals/kebabpizza.png"),
  "hawaii.png": require("../resources/meals/hawaii.png"),
  "kebabpizza_med_salad.png": require("../resources/meals/kebabpizza_med_salad.png"),

  "pepsi-max.png": require("../resources/meals/pepsi-max.png"),
  "Fanta_Exotic.png": require("../resources/meals/Fanta_Exotic.png"),
  "coca_cola_zero.png": require("../resources/meals/coca_cola_zero.png"),

  "princesstårta.png": require("../resources/meals/princesstårta.png"),
  "chokladboll.png": require("../resources/meals/chokladboll.png"),
  "kladdkaka.png": require("../resources/meals/kladdkaka.png"),

  "hamburgare.png": require("../resources/meals/hamburgare.png"),
  "calzone.png": require("../resources/meals/calzone.png"),
};

export default function CategoryScreen({ route, navigation }) {
  const category = route.params.category;

  const selectedMeals =
    meals.find((obj) => obj[category + "s"])?.[category + "s"] || [];

  return (
    <ImageBackground
      source={require("../resources/background-no-food.png")}
      style={styles.background}
    >
      <OrderButtonDirector/>
      <View style={{ paddingTop: 120, alignItems: "center" }}>
        <Text style={[styles.pressableText, { fontSize: 40 }]}>
          {category.toUpperCase()}
        </Text>

        <FlatList
          style={{ marginTop: 30 }}
          data={selectedMeals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const cleanImageName = item.image.split("/").pop();

            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("ProductInfo", {
                    product: {
                      ...item,
                      image: mealImages[cleanImageName], // skickar rätt bild
                    },
                  })
                }
              >
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
                    gap: 20,
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
              </Pressable>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
}
