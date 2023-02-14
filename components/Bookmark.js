import { useMemo, useContext, useRef } from 'react'
import { ScrollView, Text, StyleSheet, View, Pressable } from 'react-native'
import { index } from "./contents/data/index";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgButton from "./SvgButton";
import  {Context} from './Context'

const Separator = () => <View style={styles.separator} />;

export default function Bookmark({ navigation }) {
  const {setFavs} = useContext(Context)
  const {favs} = useContext(Context)
  const keys = Object.keys(favs)
  const { colors } = useTheme();
  const initFavs = useRef()
  const initKeys = useRef()
  
  useMemo(() => {
     initFavs.current = JSON.parse(JSON.stringify(favs))
     initKeys.current = keys
  }, [])

  const saveFavs = async (n) => {
    try {
      const stringifyFavs = JSON.stringify(n);
      await AsyncStorage.setItem("favs", stringifyFavs);
    } catch (error) {
      console.log(error);
    }
  };

  const addFav = (secName ,favIndex) => {
    const newFavs = {};
    if (favs[secName] == undefined) {
      newFavs[secName] = [favIndex];
    } else {
      newFavs[secName] = [...favs[secName], favIndex];
    }    
    setFavs({ ...favs, ...newFavs })
    saveFavs({ ...favs, ...newFavs })
  };

  const removeFav = (secName, favIndex) => {
    const newFavs = {...favs};
    const index = favs[secName].indexOf(favIndex);
    newFavs[secName].splice(index, 1);
    if (newFavs[secName].length == 0 ) {
      delete newFavs[secName]
    }
    setFavs(newFavs)
    saveFavs(newFavs)
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginBottom: 35 }}>
        {initKeys.current.map((sectionName) => initFavs.current[sectionName].map((contentName, i) => {
          return (<View style={{ paddingHorizontal: 30 }} key={i}>
            <View style={styles.btn}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Paragraph", { name: sectionName, id: contentName });
                }}
                style={[styles.desc, { flexGrow: 1 }]}
              >
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: "Rubik-Regular",
                  }}
                >
                  {index[sectionName][contentName].title}
                </Text>
              </Pressable>
              <Pressable style={[styles.desc, { width: 20 }]}>
                {favs[sectionName]?.includes(contentName) ? (
                  <SvgButton
                    size={26}
                    name="removeFav"
                    onPress={() => removeFav(sectionName, contentName)}
                  />
                ) : (
                  <SvgButton
                    size={26}
                    name="addFav"
                    onPress={() => addFav(sectionName, contentName)}
                  />
                )}
              </Pressable>
            </View>
            <Separator />
          </View>)
        }))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  desc: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    flexShrink: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
});