import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  strong: {
    fontFamily: 'Rubik-SemiBold'
  },
  italic: {
    fontStyle: 'italic'
  },
  number: {
    overflow: 'hidden',
    borderRadius: 9,
    fontSize: 16,
    paddingRight: 4,
    paddingLeft: 5,
    marginTop: -3,
    marginBottom: -4,
    marginRight: 5,
  },
  p: {
    margin: 5,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Rubik-Regular'
  },
  li: {
    paddingLeft: 10,
    lineHeight: 17
  },
  litera0: {
    textShadowRadius: 2
  },
  litera: {
    color: 'red'
  },
  alertText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  alert: {
    backgroundColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  primer: {
    paddingLeft: 10,
    lineHeight: 17
  }
});
