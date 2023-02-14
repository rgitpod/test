import { useState, useCallback, useEffect } from "react";
import Home from "./components/Home";
import Content from "./components/Content";
import Paragraph from "./components/Paragraph";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppFooter from "./components/AppFooter";
import Search from "./components/Search";
import Bookmark from "./components/Bookmark";
import FontSize from "./components/FontSize";
import { Theme } from "./components/Theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Test from "./components/Test";
import { Context } from "./components/Context";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [settings, setSettings] = useState({ fontSizes: FS, mod: Theme.light });
  const [favs, setFavs] = useState({});
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBoldItalic": require("./assets/fonts/Rubik-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    initSettings();
  }, []);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("settings");
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  const initSettings = async () => {
    try {
      const favs = await AsyncStorage.getItem("favs");
      const sett = await AsyncStorage.getItem("settings");
      if (favs != null) {
        setFavs(JSON.parse(favs));
      }
      if (sett != null) {
        FS = { ...JSON.parse(sett) };
        console.log(FS);
        setSettings(FS);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveSettings = (n) => {
    try {
      const stringSet = JSON.stringify(n);
      AsyncStorage.setItem("settings", stringSet);
    } catch (error) {
      console.log(error);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const changeTheme = () => {
    let newSet = {};
    setSettings(() =>
      settings.mod.dark
        ? (newSet = { ...settings, mod: Theme.light })
        : (newSet = { ...settings, mod: Theme.dark })
    );
    saveSettings(newSet);
  };

  return (
    <Context.Provider value={{ favs, setFavs, settings, setSettings }}>
      <SafeAreaProvider>
        <NavigationContainer theme={settings.mod}>
          <Stack.Navigator>
            <Stack.Group
              screenOptions={{
                header: (props) => {
                  return <AppFooter {...props} onPress={changeTheme} />;
                },
              }}
            >
              <Stack.Screen name="Home">
                {(props) => <Home {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Morphemics" component={Content} />
              <Stack.Screen name="Phonetics" component={Content} />
              <Stack.Screen name="Lexicology" component={Content} />
              <Stack.Screen name="Orthography" component={Content} />
              <Stack.Screen name="Morphology" component={Content} />
              <Stack.Screen name="Syntax" component={Content} />
              <Stack.Screen name="Culture" component={Content} />
              <Stack.Screen name="Test" component={Test} />
              <Stack.Screen name="Paragraph" component={Paragraph} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }}>
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Bookmark" component={Bookmark} />
              <Stack.Screen name="FontSize" component={FontSize} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Context.Provider>
  );
}

let FS = {
  number: 20,
  text: 18,
  alertText: 15,
};
