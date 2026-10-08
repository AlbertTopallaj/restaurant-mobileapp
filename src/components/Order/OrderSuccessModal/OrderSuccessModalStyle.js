import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,    
    },
    modal: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 28,
        alignItems: "center",
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    title: {
        fontSize: 23,
        fontWeight: "700",
        color: "#222222",
        textAlign: "center",
        marginTop: 16,
        marginBottom: 12,  
    },
    message: {
        fontSize: 15,
        color: "#555555",
        textAlign: "center",
        lineHeight: 23,
    },
    time: {
        fontSize: 15,
        fontWeight: "600",
        color: "#333333",
        marginTop: 20,
        marginBottom: 24,
    },

    button: {
        width: "100%",
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 12,
        alignItems: "center",   
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
    },
});