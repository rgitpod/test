import { StyleSheet, View, Button } from "react-native";
import SvgButton from './SvgButton'

export default function AppFooter() {
  return (
    <View style={styles.footer}>
      <SvgButton size={26} name='exit' />
      <SvgButton size={26} name='mod' />
      <SvgButton size={26} name='bookmark' />
      <SvgButton size={26} name='search' />
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
