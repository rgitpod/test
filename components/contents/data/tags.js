import { useContext } from "react";
import { Text, View, Dimensions } from "react-native";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { Context } from "../../Context";

const P = ({ children }) => {
  const { colors } = useTheme();
  const { settings } = useContext(Context);

  return (
    <View>
      <Text
        style={[
          styles.p,
          { color: colors.text, fontSize: settings.fontSizes.text },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const Strong = ({ children }) => {
  const { colors } = useTheme();
  return (
    <Text style={[styles.strong, { color: colors.text }]}>{children}</Text>
  );
};

const Em = ({ children }) => {
  const { colors } = useTheme();
  return (
    <Text style={[styles.italic, { color: colors.text }]}>{children}</Text>
  );
};

const Span = ({ children, className }) => {
  const { colors } = useTheme();
  const { settings } = useContext(Context);

  if (className === "number") {
    return (
      <View>
        <Text
          style={{
            fontWeight: "700",
            color: colors.text,
            backgroundColor: colors.number,
            fontSize: settings.fontSizes.number,
            ...styles.number,
          }}
        >
          {children}
        </Text>
      </View>
    );
  }

  return (
    <Text
      style={{
        color: colors.text,
        textShadowColor: colors.litera0,
        ...styles[className],
      }}
    >
      {children}
    </Text>
  );
};

const Li = ({ children }) => {
  const { colors } = useTheme();
  const { settings } = useContext(Context);
  return (
    <View>
      <Text style={[styles.li, { fontSize: settings.fontSizes.text }]}>
        {children}
      </Text>
    </View>
  );
};

const Div = ({ children, className }) => {
  const { colors } = useTheme();
  const { settings } = useContext(Context);
  return (
    <View>
      <Text
        style={[
          styles[className],
          { color: colors.text, fontSize: settings.fontSizes.text },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const Sup = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View>
      <Text
        style={[
          { position: "relative", top: -3, fontSize: 18 },
          { color: colors.text },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const T = ({ children }) => {
  return (
    <View>
      <Text style={styles.t}>{children}</Text>
    </View>
  );
};

export { P, Strong, Em, Span, Li, Div, Sup, T };
