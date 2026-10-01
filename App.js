import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home"
import Order from "./src/screens/Order";

export default function App() {
  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
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

    </Stack.Navigator>
  </NavigationContainer>;
}
