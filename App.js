import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Order from "./src/screens/Order/Order";
import { OrderProvider } from "./src/context/OrderContext";
import CategoryScreen from "./src/screens/CategoryScreen";
import { useEffect, useState } from "react";
import { Asset } from "expo-asset";
import ProductInfo from "./src/screens/ProductInfo";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [ready, setReady] = useState(false);

  // Load the pictures
  useEffect(() => {
    Asset.loadAsync([
      require("./src/resources/background-no-food.png"),
      require("./src/resources/meals/kebabrulle.png"),
      require("./src/resources/meals/kebabtallrik_med_pommes.png"),
      require("./src/resources/meals/kebabtallrik_med_ris.png"),
      require("./src/resources/meals/kebabpizza.png"),
      require("./src/resources/meals/hawaii.png"),
      require("./src/resources/meals/kebabpizza_med_salad.png"),
      require("./src/resources/meals/pepsi-max.png"),
      require("./src/resources/meals/Fanta_Exotic.png"),
      require("./src/resources/meals/coca_cola_zero.png"),
      require("./src/resources/meals/princesstårta.png"),
      require("./src/resources/meals/chokladboll.png"),
      require("./src/resources/meals/kladdkaka.png"),
      require("./src/resources/meals/hamburgare.png"),
      require("./src/resources/meals/calzone.png"),
    ]).then(() => setReady(true));
  }, []);

  // If the pictures are not ready, return null
  if (!ready) return null;
  
  return (
    <OrderProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Startsida",
            }}
          />

          <Stack.Screen
            name="Order"
            component={Order}
            options={{
              title: "Beställ",
            }}
          />

          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
            options={{ title: "Meny" }}
          />

          <Stack.Screen name="ProductInfo" component={ProductInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </OrderProvider>
  );
}
