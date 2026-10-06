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
    color: "black",
    fontFamily: "serif",
    fontSize: 16,
    fontWeight: "bold",
  },

  orderList: {
    marginTop: 20,
  },

  orderListContainer: {
    flex: 1,
    width: "100%",
  },

  deleteButton: {
    marginLeft: "auto",
  },
});
