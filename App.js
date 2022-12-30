import { useState, useCallback } from 'react'
import Home from "./components/Home";
import Content from "./components/Content";
import Paragraph from "./components/Paragraph";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppFooter from "./components/AppFooter";
import { Theme } from './components/Theme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
    const [theme, setTheme] = useState(Theme.light)
      const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
        'Rubik-SemiBold': require('./assets/fonts/Rubik-SemiBold.ttf'),
        'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  const changeTheme = () => {
    setTheme(() =>  theme.dark ? Theme.light : Theme.dark)
  }
  
  return (
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          header: (props) => {
            return <AppFooter {...props} onPress={changeTheme} />;
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
    </SafeAreaProvider>
  );
}
