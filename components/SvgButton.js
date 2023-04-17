import { View, Pressable } from "react-native";
import { icon } from "./contents/assets/icon";
import { useTheme } from "@react-navigation/native";
import Svg from "react-native-svg";

export default function SvgButton({ name, size, onPress }) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          width: 45,
          height: 45,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: pressed ? colors.pressed : '',
          zIndex: 3,
        },
      ]}
    >
      <Svg height={size} width={size} viewBox="0 0 16 16" fill={colors.text}>
        {icon[name]}
      </Svg>
    </Pressable>
  );
}
