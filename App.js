import Home from "./components/Home";
import Content from "./components/Content";
import Paragraph from "./components/Paragraph";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppFooter from "./components/AppFooter";
import { Theme } from './components/Theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={Theme.dark}>
      <Stack.Navigator
        screenOptions={{
          header: (props) => {
            return <AppFooter {...props} />;
          }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Morphemics" component={Content} />
        <Stack.Screen name="Phonetics" component={Content} />
        <Stack.Screen name="Lexicology" component={Content} />
        <Stack.Screen name="Orthography" component={Content} />
        <Stack.Screen name="Morphology" component={Content} />
        <Stack.Screen name="Syntax" component={Content} />
        <Stack.Screen name="Culture" component={Content} />
        <Stack.Screen name="Paragraph" component={Paragraph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
