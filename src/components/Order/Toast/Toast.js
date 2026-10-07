import { Text } from "react-native";

export default function Toast({ message, visible }) {
  if (!visible) {
    return;
    // dont show toast
  }

  return (
    <>
      <Text>{message}</Text>
    </>
  );
}
