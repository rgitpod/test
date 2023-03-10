import { useContext } from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { index } from "./contents/data/index";
import { subIndex } from "./contents/data/subIndex";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContentItem from "./ContentItem";
import ContentSub from "./ContentSub";

const Separator = () => <View style={styles.separator} />;

export default function Content({ navigation, route, subIndex, sub }) {
  const routeName = route.name;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 75 }}>
        {index[routeName].map((item, i) =>
          item.sub ? (
            <ContentSub
              item={item}
              i={i}
              routeName={routeName}
              navigation={navigation}
              key={i}
            />
          ) : (
            <ContentItem
              item={item}
              i={i}
              routeName={routeName}
              navigation={navigation}
              key={i}
            />
          )
        )}
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
