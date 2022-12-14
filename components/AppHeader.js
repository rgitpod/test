import { StyleSheet, Text, View, Button } from "react-native";

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Button title={"mod"} />
      <Button title={"bookmark"} />
      <Button title={"search"} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  name: {
    fontSize: 16,
  },
});
