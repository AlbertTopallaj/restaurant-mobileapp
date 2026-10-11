import {Image, Pressable, Text} from "react-native";
import {styles} from "../style.js"
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function MenuButton({imagePath, name, accessibilityLabel}) {
    const navigation = useNavigation();
    const [textHeight, setTextHeight] = useState(0);
    return (
        <Pressable style={styles.menuButton}
                   accessibilityRole="button"
                   accessibilityLabel={accessibilityLabel}
                   onPress={() => navigation.navigate("CategoryScreen", {
                    category: name.toLowerCase()})}>
            <Image
                source={imagePath}
                accessible={false}
                style={[styles.menuButtonIcon,
                    {
                        height: textHeight,
                        width: textHeight
                    }]}
            />

            <Text style={styles.pressableText}
                  onLayout={(event) =>
                      setTextHeight(event.nativeEvent.layout.height)
                  }>
                {name}
            </Text>
        </Pressable>
    );
}
