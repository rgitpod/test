import { StyleSheet, View, Dimensions } from "react-native";
import SvgButton from "./SvgButton";
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Theme } from './Theme'

export default function AppHeader({ navigation, onPress }) {
  const { colors } = useTheme()
  return (
    <View style={[styles.header, {backgroundColor: colors.card}]}>
      <SvgButton size={30} name="fontSize" onPress={() => navigation.navigate('FontSize')}/>
      <SvgButton size={24} name="mod" onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    paddingBottom: 3,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    position: "absolute",
    width: "100%",
    height: 60,
    top: 0
  },
  name: {
    fontSize: 16,
  },
});