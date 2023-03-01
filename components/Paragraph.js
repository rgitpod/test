import { ScrollView } from "react-native";
import { index } from "./contents/data/index";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Paragraph({ navigation, route }) {
  const name = route.params.name;
  const id = route.params.id;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{paddingLeft: 14, paddingRight: 14, paddingBottom: 75}}>{index[name][id].text}</ScrollView>
    </SafeAreaView>
  );
}
