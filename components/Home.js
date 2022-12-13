import { StyleSheet, Text, View, Button } from "react-native";
import MenuButton from "./MenuButton";

export default function Home({ navigation, route }) {
  console.log(route)
  return (
    <>
      <MenuButton title="Фонетика" navTo="Phonetics" navigation={navigation} />
      <MenuButton
        title="Морфология" navTo=''
        onPress={() => navigation.navigate("Morphemics")}
      />
      <MenuButton
        title="Орфография"
        onPress={() => navigation.navigate("Spelling")}
      />
    </>
  );
}
