import { ImageBackground, Text, View } from "react-native";
import { styles } from "../style.js";
import MenuButton from "../components/MenuButton";
import MapsButton from "../components/MapsButton";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function Home() {
  const images = {
    pizza: require("../resources/pizza.png"),
    kebab: require("../resources/kebab.png"),
    dryck: require("../resources/dryck.png"),
  };

  return (
    <>
      <ImageBackground
        source={require("../resources/background-no-food.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            Öppet:{"\n"}
            Mån - Sön 09:00 - 02:30
          </Text>
          <MenuButton
            imagePath={images.pizza}
            name={"Pizza"}
            navigateTo={"CategoryScreen"}
          />
          <MenuButton
            imagePath={images.kebab}
            name={"Kebab"}
            navigateTo={"CategoryScreen"}
          />
          <MenuButton
            imagePath={images.dryck}
            name={"Drink"}
            navigateTo={"CategoryScreen"}
          />
        </View>
        <View style={styles.contentFooter}>
          <Text style={[styles.text, { color: "red" }]}>25% RABATT</Text>
          <Text style={[styles.text, { fontSize: 20 }]}>Vid kontantköp</Text>
        </View>
        <MapsButton />
      </ImageBackground>
    </>
  );
}
