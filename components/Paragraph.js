import { ScrollView, View, Text } from "react-native";
import { index } from "./contents/data/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

export default function Paragraph({ route }) {
  const { colors } = useTheme();
  const name = route.params.name;
  const id = route.params.id;
  const subId = route.params.subId;
  const subName = route.params.subName;

  const data = index[name][id]?.[subName]?.[subId] ?? index[name][id];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: colors.card,
          paddingBottom: 2,
          paddingHorizontal: 7,
          borderBottomLeftRadius: 7,
          borderBottomRightRadius: 7,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
      >
        <Text
          style={{ color: colors.text, textAlign: "center" }}
          numberOfLines={1}
        >
          {data.title}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingLeft: 14,
          paddingRight: 14,
          paddingBottom: 75,
        }}
      >
        {data.text}
      </ScrollView>
    </SafeAreaView>
  );
}
