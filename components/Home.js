import { StyleSheet, Text, View, Button } from "react-native";
import MenuButton from "./MenuButton";

export default function Home({ navigation }) {
  return (
    <>
      <MenuButton title="Фонетика" navTo="Phonetics" navigation={navigation} />
      <Button title="Морфология" onPress={() => navigation.navigate("Morphemics")} />      
      <Button title="Орфография" onPress={() => navigation.navigate("Spelling")} />
    </>
  );
} 