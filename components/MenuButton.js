import { View, StyleSheet } from "react-native";
import { Button } from "./Button";

export default function MenuButton({ navigation, title, onPress, navTo }) {
  console.log("hi");
  return (
    <View style={styles.btn}>
      <Button
        style={{ flexGrow: 1 }}
        title={title}
        onPress={() => navigation.navigate(navTo)}
      />
      <Button title="?" />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
  },
});
