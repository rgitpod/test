import { useMemo, useContext, useRef } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { index } from "./contents/data/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgButton from "./SvgButton";
import { Context } from "./Context";
import ContentItem from "./ContentItem";

const Separator = () => <View style={styles.separator} />;

export default function Bookmark({ navigation }) {
  const { favs, setFavs } = useContext(Context);
  const keys = Object.keys(favs);
  const { colors } = useTheme();
  const initFavs = useRef();
  const initKeys = useRef();

  useMemo(() => {
    initFavs.current = JSON.parse(JSON.stringify(favs));
    initKeys.current = keys;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginBottom: 35 }}>
        {initKeys.current.map((sectionName) => {
          const routeName = initFavs.current[sectionName];
          if (routeName.section) {
            return routeName.section.map((i) => {
              const item = index[sectionName][i];
              console.log(sectionName);
              return (
                <ContentItem
                  item={item}
                  i={i}
                  routeName={sectionName}
                  navigation={navigation}
                  key={i}
                />
              );
            });
          }
          if (routeName.sub) {
            const subKeys = Object.keys(routeName.sub);
            return subKeys.map((subName) => {
              return routeName.sub[subName].map((i, key) => {
                const id = index[sectionName].findIndex((i) => {
                  if (i[subName]) {
                    return i;
                  }
                });
                const item = index[sectionName][id][subName][i];
                return (
                  <ContentItem
                    item={item}
                    i={id}
                    id={i}
                    subName={subName}
                    routeName={sectionName}
                    navigation={navigation}
                    key={key}
                  />
                );
              });
            });
          }
        })}
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
