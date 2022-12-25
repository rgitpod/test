import { StyleSheet, View, Button, Dimensions } from "react-native";
import SvgButton from "./SvgButton";

export default function AppFooter({ navigation }) {
  return (
    <View style={styles.footer}>
      <SvgButton size={26} name="exit" onPress={() => navigation.goBack()}/>
      <SvgButton size={26} name="mod" />
      <SvgButton size={26} name="bookmark" />
      <SvgButton size={26} name="search" />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "gray",
    paddingTop: 3,
    paddingBottom: 3,
    position: "absolute",
    width: "100%",
    height: 40,
    top: Dimensions.get("window").height - 40,
  },
  name: {
    fontSize: 16,
  },
});
