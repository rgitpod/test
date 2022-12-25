import Home from "./components/Home";
import Content from "./components/Content";
import Paragraph from "./components/Paragraph";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppFooter from "./components/AppFooter";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => {
            console.log()
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
