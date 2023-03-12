import { ScrollView } from "react-native";
import { index } from "./contents/data/index";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Paragraph({  route }) {
  const name = route.params.name;
  const id = route.params.id;
  const subId = route.params.subId
  const subName = route.params.subName

  const data = index[name][id]?.[subName]?.[subId] ?? index[name][id]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          paddingLeft: 14,
          paddingRight: 14,
          paddingBottom: 75,
        }}
      >
        {data.text}
      </ScrollView>
    </SafeAreaView>
  );
}
