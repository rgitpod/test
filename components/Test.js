import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "./contents/data/tags";
import  {Root, Suffix, Prefix } from './contents/assets/symbols'

export default function Test({ navigation, route }) {
  return <View style={{rowGap: 10, padding: 10}}>
  <Root />
  <Suffix />
  <Prefix />
  <View style={{width: 100, height: 50, borderRightWidth: 10, borderTopWidth: 10}}/>
</View>
}
