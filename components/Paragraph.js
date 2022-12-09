import { ScrollView, StyleSheet } from "react-native";
import { index } from "./contents/data/index";

export default function Paragraph({ navigation, route }) {
  const name = route.params.name;
  const id = route.params.id;
  return (
    <ScrollView>
      {index[name][id].text}
    </ScrollView>
  );
}


