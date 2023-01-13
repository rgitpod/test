import { StyleSheet, View, Dimensions } from "react-native";
import SvgButton from "./SvgButton";
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from './Theme'

export default function AppFooter({ navigation, onPress }) {
  const { colors } = useTheme()
  return (
    <View style={[styles.footer, {backgroundColor: colors.card}]}>
      <SvgButton size={26} name="exit" onPress={() => navigation.goBack()}/>
      <SvgButton size={26} name="search" onPress={() => navigation.navigate('Search')}/>
      <SvgButton size={26} name="bookmark" onPress={() => navigation.navigate('Bookmark')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    paddingBottom: 3,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    position: "absolute",
    width: "100%",
    height: 60,
    top: Dimensions.get("window").height - 60,
  },
  name: {
    fontSize: 16,
  },
});
