import {Image, Pressable, Text} from "react-native";
import {styles} from "../style.js"
import { useNavigation } from "@react-navigation/native";
import {useState} from "react";
export default function MenuButton({imagePath, name, navigateTo}) {
    const navigation = useNavigation();
    const [textHeight, setTextHeight] = useState(0);
    return (
        <Pressable style={styles.menuButton}
                   onPress={() => navigation.navigate(navigateTo)}>
            <Image
                source={imagePath}
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