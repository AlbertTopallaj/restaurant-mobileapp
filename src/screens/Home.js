import { ImageBackground, Text, View } from "react-native";
import { styles } from "../style.js";
import MenuButton from "../components/MenuButton";
import MapsButton from "../components/MapsButton";
import OrderButtonDirector from "../components/Order/OrderButtonDirector/OrderButtonDirector.js";

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
        accessible={false}
      >
        <OrderButtonDirector />
        <View style={styles.content}>
          <Text
            style={styles.text}
            accessibilityLabel="Öppettider: måndag till söndag, klockan 09:00 till 02:30"
          >
            Öppet:{"\n"}
            Mån - Sön 09:00 - 02:30
          </Text>
          <MenuButton
            imagePath={images.pizza}
            name={"Pizza"}
            accessibilityLabel="Pizzameny"
          />
          <MenuButton
            imagePath={images.kebab}
            name={"Kebab"}
            accessibilityLabel="Kebabmeny"
          />
          <MenuButton
            imagePath={images.dryck}
            name={"Drink"}
            accessibilityLabel="Dryckesmeny"
          />
        </View>
        <View
          style={styles.contentFooter}
          accessible={true}
          accessibilityLabel="25 procent rabatt vid kontantköp"
        >
          <Text style={[styles.text, { color: "red" }]}>25% RABATT</Text>
          <Text style={[styles.text, { fontSize: 20 }]}>Vid kontantköp</Text>
        </View>
        <MapsButton />
      </ImageBackground>
    </>
  );
}
