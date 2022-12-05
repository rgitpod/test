import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { index } from "./contents/data/index";


export default function Phonetics({ navigation, route }) {
  const routeName = route.name

  return (
    <View>
      {index[routeName].map((item, i) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Paragraph", { name: routeName, id: i });
          }}
          key={i}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
