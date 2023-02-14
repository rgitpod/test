import { ScrollView } from "react-native";
import { index } from "./contents/data/index";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Paragraph({ navigation, route }) {
  const name = route.params.name;
  const id = route.params.id;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{paddingLeft: 12, paddingRight: 12, paddingBottom: 75}}>{index[name][id].text}</ScrollView>
    </SafeAreaView>
  );
}
