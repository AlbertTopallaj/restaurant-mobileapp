import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home"
import CategoryScreen from "./src/screens/CategoryScreen";

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
          name="CategoryScreen"
          component={CategoryScreen}
          options={{ title: "Meny" }}
      />

    </Stack.Navigator>
  </NavigationContainer>;
}
