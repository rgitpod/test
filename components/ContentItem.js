import { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SvgButton from "./SvgButton";
import { useTheme } from "@react-navigation/native";
import { Context } from "./Context";

const Separator = () => <View style={styles.separator} />;

export default function ContentItem({
  item,
  i,
  routeName,
  navigation,
  id,
  subName,
}) {
  const { favs, setFavs } = useContext(Context);
  const { colors } = useTheme();

  const subMode = typeof subName === "string";
  const inFavs = subMode
    ? favs[routeName]?.sub?.[subName]?.includes(id)
    : favs[routeName]?.section?.includes(i);

  const saveFavs = async (n) => {
    try {
      const stringifyFavs = JSON.stringify(n);
      await AsyncStorage.setItem("favs", stringifyFavs);
    } catch (error) {
      console.log(error);
    }
  };

  const addFav = () => {
    const newFavs = {};
    if (subMode) {
      newFavs[routeName] = { sub: { [subName]: [id] } };
      if (favs[routeName]?.sub?.[subName]) {
        newFavs[routeName].sub[subName] = [...favs[routeName].sub[subName], id];
      }
    } else {
      newFavs[routeName] = { section: [i] };
      if (favs[routeName]?.section) {
        newFavs[routeName].section = [...favs[routeName].section, i];
      }
    }
    newFavs[routeName] = { ...favs[routeName], ...newFavs[routeName] };
    setFavs({ ...favs, ...newFavs });
    saveFavs({ ...favs, ...newFavs });
  };

  const removeFav = () => {
    const newFavs = { ...favs };
    if (subMode) {
      const index = favs[routeName].sub[subName].indexOf(id);
      newFavs[routeName].sub[subName].splice(index, 1);
      if (!newFavs[routeName].sub[subName].length) {
        delete newFavs[routeName].sub[subName];
        if (!Object.keys(newFavs[routeName].sub).length) {
          delete newFavs[routeName].sub;
          if (!Object.keys(newFavs[routeName]).length) {
            delete newFavs[routeName];
          }
        }
      }
    } else {
      const index = favs[routeName]?.section.indexOf(i);
      newFavs[routeName]?.section.splice(index, 1);
      if (newFavs[routeName].section.length == 0) {
        delete newFavs[routeName].section;
        if (!Object.keys(newFavs[routeName]).length) {
          delete newFavs[routeName];
        }
      }
    }
    setFavs(newFavs);
    saveFavs(newFavs);
  };

  return (
    <View style={{ paddingRight: 30 }}>
      <View style={styles.btn}>
        <View
          style={{
            width: 30,
            alignSelf: "center",
            paddingLeft: 5,
            marginTop: 3,
          }}
        >
          <Text style={{color: colors.text}}>{(subMode ? id  : i ) + 1}</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("Paragraph", {
              name: routeName,
              id: i,
              subId: id,
              subName: subName,
            });
          }}
          style={[styles.title, { flexGrow: 1 }]}
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
        <Pressable style={[styles.fav, { width: 20 }]}>
          {inFavs ? (
            <SvgButton size={26} name="removeFav" onPress={() => removeFav()} />
          ) : (
            <SvgButton size={26} name="addFav" onPress={() => addFav()} />
          )}
        </Pressable>
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 9,
    marginBottom: 5,
    paddingRight: 15,
    flexShrink: 1,
    alignSelf: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 30,
  },
  btn: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  fav: {
    alignSelf: "center",
  },
});
