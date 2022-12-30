import { ScrollView, View } from "react-native";
import { index } from "./contents/data/index";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Paragraph({ navigation, route }) {
  const name = route.params.name;
  const id = route.params.id;
  return (
    <SafeAreaView  style={{flex: 1}}>
    <ScrollView>
      {index[name][id].text}
    </ScrollView>
    </SafeAreaView>
  );
}


