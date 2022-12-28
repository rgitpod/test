import { StyleSheet, View, Button, Dimensions } from "react-native";
import SvgButton from "./SvgButton";
import { useTheme } from '@react-navigation/native'

export default function AppFooter({ navigation }) {
  const { colors } = useTheme()
  return (
    <View style={[styles.footer, {backgroundColor: colors.card}]}>
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
    paddingTop: 10,
    paddingBottom: 3,
    position: "absolute",
    width: "100%",
    height: 50,
    top: Dimensions.get("window").height - 50,
  },
  name: {
    fontSize: 16,
  },
});
