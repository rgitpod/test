import { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import SvgButton from "./SvgButton";
import { useTheme } from "@react-navigation/native";
import { Context } from "./Context";

const Separator = () => <View style={styles.separator} />;

export default function ContentItem({ item, i, routeName, navigation}) {
      const { favs, setFavs } = useContext(Context);      
      const { colors } = useTheme();
  
  
  const saveFavs = async (n) => {
    try {
      const stringifyFavs = JSON.stringify(n);
      await AsyncStorage.setItem("favs", stringifyFavs);
    } catch (error) {
      console.log(error);
    }
  };

  const addFav = (favIndex) => {
    const newFavs = {};
    if (favs[routeName] == undefined) {
      newFavs[routeName] = [favIndex];
    } else {
      newFavs[routeName] = [...favs[routeName], favIndex];
    }
    setFavs({ ...favs, ...newFavs });
    saveFavs({ ...favs, ...newFavs });
  };

  const removeFav = (favIndex) => {
    const newFavs = { ...favs };
    const index = favs[routeName].indexOf(favIndex);
    newFavs[routeName].splice(index, 1);
    if (newFavs[routeName].length == 0) {
      delete newFavs[routeName];
    }
    setFavs(newFavs);
    saveFavs(newFavs);
  };
    
    return <View style={{ paddingHorizontal: 30 }} key={i}>
            <View style={styles.btn}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Paragraph", {
                    name: routeName,
                    id: i
                  });
                }}
                style={[styles.desc, { flexGrow: 1 }]}
              >
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: "Rubik-Regular",
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
              <Pressable style={[styles.desc, { width: 20 }]}>
                {favs[routeName]?.includes(i) ? (
                  <SvgButton
                    size={26}
                    name="removeFav"
                    onPress={() => removeFav(i)}
                  />
                ) : (
                  <SvgButton
                    size={26}
                    name="addFav"
                    onPress={() => addFav(i)}
                  />
                )}
              </Pressable>
            </View>
            <Separator />
          </View>
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