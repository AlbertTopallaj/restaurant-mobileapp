import { StyleSheet } from "react-native";

export const orderStyles = StyleSheet.create({
  emptyOrderLayout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },

  emptyOrderText: {
    color: "white",
    fontFamily: "serif",
    fontSize: 16,
    fontWeight: "bold",
  },

  orderList: {
    paddingTop: 100,
  },
});
