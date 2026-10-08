import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
        alignItems: "center",
    },

    toast: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#FFFFFF",
        paddingVertical: 14,
        paddingHorizontal: 20,

        borderRadius: 30,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },

    message: {
        color: "#333333",
        fontSize: 15,
        fontWeight: "500",
        marginLeft: 10,
    }
});
