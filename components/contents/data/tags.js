import { createContext, useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const TagContext = createContext();

const P = ({ children }) => {
  const tag = useContext(TagContext);
  return (
    <View>
      <Text style={styles.p}>
        {tag}
        {children}
      </Text>
    </View>
  );
};

const Strong = ({ children }) => {
  return <Text style={styles.strong}>{children}</Text>;
};

const Em = ({ children }) => {
  return <Text style={styles.italic}>{children}</Text>;
};

const Span = ({ children, className }) => {
  return (
    <View>
      <Text style={styles[className]}>{children}</Text>
    </View>
  );
};

const Li = ({ children }) => {
  return <TagContext.Provider value="&#8208; ">{children}</TagContext.Provider>;
};

const Div = ({ children, className }) => {
  return <View>{children}</View>;
};

export { P, Strong, Em, Span, Li, Div };
