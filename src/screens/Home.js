import {Image, ImageBackground, Text, View} from "react-native";
import {styles} from "../style.js"
import MenuButton from "../components/MenuButton";

export default function Home() {
    const images = {
        pizza: require("../resources/pizza.png"),
        kebab: require("../resources/kebab.png"),
        dryck: require("../resources/dryck.png")
    };
    return <ImageBackground
        source={require("../resources/background-no-food.png")}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.content}>
            <Text style={styles.text}>
                Öppet:{"\n"}
                Mån - Sön 09:00 - 02:30
            </Text>
            <MenuButton imagePath={images.pizza} name={"Pizza"} navigateTo={"Home"}/>
            <MenuButton imagePath={images.kebab} name={"Kebab"} navigateTo={"Home"}/>
            <MenuButton imagePath={images.dryck} name={"Dryck"} navigateTo={"Home"}/>
        </View>
        <View style={styles.contentFooter}>
            <Image style={styles.menuButtonIcon} source={images.dryck} />
            <Text style={styles.text}>Endast 5:-</Text>
        </View>
    </ImageBackground>
}