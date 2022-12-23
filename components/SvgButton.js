import { View, Pressable} from 'react-native'
import { icon } from './contents/assets/icon'
import Svg, { Path } from "react-native-svg";

export default function SvgButton({ name, size, onPress }) {
    return (
    <Pressable>
        <View>
            <Svg height={size} width={size} viewBox= '0 0 16 16' fill='black'>
                {icon[name]}
            </Svg>
        </View>
    </Pressable>
    )}