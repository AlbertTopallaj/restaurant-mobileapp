import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  content: {
    flex: 1,
    gap: 40,
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
    alignItems: "center",
    justifyContent: "center",
    left: "32%",
    right: "28%",
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

  header: {
    fontFamily: "serif",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 25,
  },

  orderButtonLayout: {
    position: "absolute",
    top: 50,
    right: 16,
    zIndex: 10,
  },

  orderButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },

  orderHeader: {
    fontSize: 25,
    fontFamily: "serif",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 10,
  },
});
