import { useContext } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Context } from "../../Context";

export const Root = () => {
  const { settings } = useContext(Context);
  return (
    <Svg width={30} height={15} viewBox="0 0 100 50">
      <Path
        d={`M5 50 C0 0 100 0 95 50`}
        fillOpacity={0}
        stroke="black"
        strokeWidth="10"
      />
    </Svg>
  );
};

export const Suffix = () => {
  return (
    <Svg width={30} height={15} viewBox="0 0 100 50">
      <Path
        d="M5 50 L50 5 L95 50"
        fillOpacity={0}
        stroke="black"
        strokeWidth="10"
      />
    </Svg>
  );
};

export const Prefix = () => {
  return (
    <Svg width={30} height={15} viewBox="0 0 100 50">
      <Path
        d="M5 5 L95 5 L95 45"
        fillOpacity={0}
        stroke="black"
        strokeWidth="10"
      />
    </Svg>
  );
};

export const Ending = () => {
  const { settings } = useContext(Context);
  return (
    <Svg width={25} height={25} viewBox="0 0 30 30" style={{marginBottom: -5}}>
      <Path
        d="M4 5 L25 5 L25 25 L5 25 L5 5"
        fillOpacity={0}
        stroke="black"
        strokeWidth="3"
      />
    </Svg>
  );
};
