import { useState } from 'react'
import { StyleSheet, View, Dimensions } from "react-native";
import Settings from './Settings'
import SvgButton from "./SvgButton";
import { useTheme } from '@react-navigation/native'


export default function AppFooter({ navigation, route, onPress }) {
  const [optionsModal, setOptModal] = useState('none')
  const { colors } = useTheme()

  return (
    <View style={[styles.footer, {backgroundColor: colors.card}]}>
      <Settings modalVisible={optionsModal} setModalVisible={setOptModal} changeTheme={onPress}/>
      <SvgButton size={26} name={route.name == 'Home' ? 'exit' : 'back'} onPress={() => navigation.goBack()}/>
      <SvgButton size={26} name="bookmark" onPress={() => navigation.navigate('Bookmark')}/>
      <SvgButton size={26} name="search" onPress={() => navigation.navigate('Search')}/>
      <SvgButton size={26} name="options" onPress={() => setOptModal(optionsModal == 'none' ? 'flex' : 'none')}/>
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
