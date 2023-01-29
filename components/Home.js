import { View, ScrollView, Text } from "react-native";
import MenuButton from "./MenuButton";
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from './AppHeader'

export default function Home({ navigation, route, onPress }) {  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <AppHeader onPress={onPress} navigation={navigation}/>
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
        onPress={() => navigation.navigate(navigation)}
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
      <MenuButton
        title="Test"
        navTo="Test"
        navigation={navigation}
      />
    </View>
    </SafeAreaView>
  );
}
