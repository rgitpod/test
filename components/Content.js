import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { index } from "./contents/data/index";
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SvgButton from './SvgButton'

const Separator = () => <View style={styles.separator} />;

export default function Content({ navigation, route }) {
  const { colors } = useTheme()
  const routeName = route.name;
  console.log(route)
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView style={{marginBottom: 35}}>
      {index[routeName].map((item, i) => (
        <Pressable
          onPress={() => {
            navigation.navigate("Paragraph", { name: routeName, id: i });
          }}
          key={i}
          style={styles.btn}
        >
          <Text style={{color: colors.text, fontFamily: 'Rubik-Regular'}}>{item.title}</Text>
          <Separator />
        </Pressable>
  
      ))}
    </ScrollView>
    </SafeAreaView>
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
