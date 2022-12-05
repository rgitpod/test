import { View, Text, StyleSheet } from "react-native";
import { P } from '../../../tags'

const styles = StyleSheet.create({
  content: {
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});
const Paragraph = ({
  style,
  ...rest
}) => {

console.log(rest)
  return (
    <Text style={styles.paragraph} {...rest} />
  );
};

export const Spell = (
  <View>
    <P>43534656g4</P>
    <Text style={{ fontWeight: 500 }}>пfраво</Text> – это fзвуки, из которых
    состоят слова.{"\n\t"}Звукd есdть самая мелкая единица языка.
    <P style={styles.paragraph}>
        The standard  .
      </P>
          <P style={styles.paragraph}>
        Thxce standard  .
      </P>
          <P style={styles.paragraph}>
        Thxzce sgffdgtandard  .
      </P>
  </View>
);
