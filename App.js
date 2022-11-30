import Home from "./components/Home";
import Content from "./components/Content";
import AppHeader from "./components/AppHeader";
import Paragraph from "./components/Paragraph";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => <AppHeader /> }}
        />
        <Stack.Screen name="Morphemics" component={Content} />
        <Stack.Screen name="Phonetics" component={Content} />
        <Stack.Screen name="Spelling" component={Content} />
        <Stack.Screen name="Paragraph" component={Paragraph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
