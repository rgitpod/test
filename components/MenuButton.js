import { Button, View } from "react-native";

export default function MenuButton({ navigation, title, onPress, navTo }) {
  console.log("hi");
  return (
    <View>
      <Button title={title} onPress={() => navigation.navigate(navTo)} />
      <Button title="?" />
    </View>
  );
}
