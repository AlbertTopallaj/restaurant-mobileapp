import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home"
import Order from "./src/screens/Order";
import { OrderProvider } from "./src/context/OrderContext";
import CategoryScreen from "./src/screens/CategoryScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <OrderProvider>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Startsida"
          }}
      />
      <Stack.Screen
      name="Order"
      component={Order}
      options={{
        title: "Beställ"
      }}
      />

      <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{ title: "Meny" }}
      />

    </Stack.Navigator>
  </NavigationContainer>
  </OrderProvider>
  ); 
}
