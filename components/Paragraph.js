import { StyleSheet, Text, View } from "react-native";
import { index } from "./contents/data/index";

export default function Paragraph({ navigation, route }) {
  const name = route.params.name;
  const id = route.params.id;
  console.log('hi')
  return (
    <View>
      {index[name][id].text}
    </View>
  );
}
