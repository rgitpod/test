import { StyleSheet, Text, View } from "react-native";
import MenuButton from "./MenuButton";
import AppFooter from './AppFooter'
import { ScrollView } from "react-native-web";
import { Col, Row, Grid } from "react-native-easy-grid";

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
        <Grid>
    <Col>
        <Text>Fixed width</Text>
    </Col>
    <Col>
        <Text>Fluid width</Text>
    </Col>
</Grid>
    <AppFooter />
    </View>
  );
}
