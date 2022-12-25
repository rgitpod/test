import { StyleSheet, Text, ScrollView, View,Pressable } from "react-native";
import { index } from "./contents/data/index";

const Separator = () => <View style={styles.separator} />;

export default function Phonetics({ navigation, route }) {
  const routeName = route.name;

  return (
    <ScrollView>
      {index[routeName].map((item, i) => (
        <Pressable
          onPress={() => {
            navigation.navigate("Paragraph", { name: routeName, id: i });
          }}
          key={i}
          style={styles.btn}
        >
          <Text>{item.title}</Text>
          <Separator />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
