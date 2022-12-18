import { StyleSheet, Text, View, Button } from "react-native";

export default function AppFooter() {
  return (
    <View style={styles.footer}>
      <Button title={"mod"} />
      <Button title={"bookmark"} />
      <Button title={"search"} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingTop: 3,
    paddingBottom: 3
  },
  name: {
    fontSize: 16,
  },
});
