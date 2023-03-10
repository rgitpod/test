import { useContext, useState } from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { index } from "./contents/data/index";
import { subIndex } from "./contents/data/subIndex";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Content from "./Content";
import SubModal from "./SubModal";

const Separator = () => <View style={styles.separator} />;

export default function ContentSub({ item, i, routeName, navigation}) {
  const [modalVisible, setModalVisible] = useState("none");
  const routeName = route.name;
  
  return (
    <SafeAreaView>
      <Content navigation={navigation} route={route} />
      <View style={{ backgroundColor: "red", height: 150 }}>
        {subIndex[routeName].map((item, i) => (
          <View key={i}>
            <View>
              <Pressable
                onPress={() => {
                  setModalVisible("flex");
                }}
              >
                <Text>{item.title}</Text>
              </Pressable>
            </View>
            <SubModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              navigation={navigation}
              route={{name: item.rName, routeName: routeName, routeId: i}}
              subIndex={item.subData}
            />
          </View>
        ))}
      </View>
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
