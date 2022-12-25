import { View, ScrollView } from "react-native";
import MenuButton from "./MenuButton";
import AppFooter from './AppFooter'

export default function Home({ navigation, route }) {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
    <ScrollView>
      <MenuButton
        title="Фонетика. Графика"
        navTo="Phonetics"
        navigation={navigation}
      />
      <MenuButton
        title="Морфемика. Словообразование"
        navTo="Morphemics"
        onPress={() => navigation.navigate(navigation)}
      />
      <MenuButton
        title="Лексикология"
        navTo="Lexicology"
        onPress={() => navigation.navigate(navigation)}
      />
      <MenuButton
        title="Орфография"
        onPress={() => navigation.navigate("Spelling")}
      />
      <MenuButton
        title="Морфология"
        navTo="Morphology"
        onPress={() => navigation.navigate(navigation)}
      />
      <MenuButton
        title="Синтаксис"
        navTo="Syntax"
        onPress={() => navigation.navigate(navigation)}
      />
      <MenuButton
        title="Культура речи"
        navTo="Culture"
        onPress={() => navigation.navigate(navigation)}
      />
    </ScrollView>
    </View>
  );
}
