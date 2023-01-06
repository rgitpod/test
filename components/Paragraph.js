import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { index } from "./contents/data/index";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgButton from "./SvgButton";

export default function Paragraph({ navigation, route }) {
  const name = route.params.name;
  const id = route.params.id;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>{index[name][id].text}</ScrollView>
      <View style={styles.btn}>
        <SvgButton size={26} name="back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "gray",
    position: "absolute",
    height: 60,
    top: Dimensions.get("window").height - 60,
    left: 30,
  },
});
