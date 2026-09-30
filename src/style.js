import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    content: {
        flex: 1,
        gap: 60,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "12%",
        right: "12%",
        top: "16%",
        bottom: "19%",
    },

    contentFooter: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        left: "30%",
        right: "30%",
        top: "82%",
        bottom: "10%",
    },

    menuButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    menuButtonIcon: {
        resizeMode: "contain",
        maxHeight: 80,
        maxWidth: 80,
    },

    pressableText: {
        fontFamily: "serif",
        fontSize: 50,
        fontWeight: "bold",
        color: "#8F2F24",
        textAlign: "center",
        letterSpacing: 1,
    },

    text: {
        fontFamily: "serif",
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 25,
        color: "#241B14",
        textAlign: "center",
    },

});