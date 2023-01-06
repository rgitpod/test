import { View, ScrollView, Text } from "react-native";
import MenuButton from "./MenuButton";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home({ navigation, route }) {  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
    <View>
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
    </View>
    </SafeAreaView>
  );
}
