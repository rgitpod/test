import { StyleSheet, Text, View } from "react-native";
import { index } from "./contents/data/index";

export default function Note({ navigation, route }) {
  const name = route.params.name;
  const id = route.params.id;
  console.log(route.params.name)
  return (
    <View>
      <Text>{index[name][id].text}</Text>
    </View>
  );
}
