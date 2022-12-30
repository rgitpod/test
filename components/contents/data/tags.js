import { createContext, useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";

const TagContext = createContext();

const P = ({ children }) => {
  const tag = useContext(TagContext);
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[styles.p, { color: colors.text }]}>
        {tag}
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
  return (
    <View>
      <Text
        style={[
          styles[className],
          { color: colors.text, backgroundColor: colors.number },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const Li = ({ children }) => {
  return (
    <TagContext.Provider value="&#x2023; ">
      <View style={styles.li}><Text>{children}</Text></View>
    </TagContext.Provider>
  );
};

const Div = ({ children, className }) => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[styles[className], { color: colors.text }]}>
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

export { P, Strong, Em, Span, Li, Div, Sup };
