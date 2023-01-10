import { StyleSheet, Dimensions } from 'react-native';

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
    fontSize: 20,
    paddingRight: 4,
    paddingLeft: 5,
    marginTop: -3,
    marginBottom: -4,
    marginRight: 5,
  },
  p: {
    margin: 4,
    marginTop: 6,
    fontSize: 18,
    fontFamily: 'Rubik-Regular',
     width: '100%'
  },
  li: {
    paddingLeft: 16,
    fontSize: 18,
    fontFamily: 'Rubik-Regular'
  },
  litera0: {
    color: 'black',
    fontSize: 19,
    textShadowRadius: 1.8
  },
  litera: {
    color: 'black',
    fontSize: 19,
    textShadowRadius: 1.8
  },
  alertText: {
    fontFamily: 'Rubik-SemiBoldItalic',
    fontSize: 14
  },
  alert: {
    backgroundColor: '#d2d2d4',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 18,
    fontFamily: 'Rubik-Regular',
  backgroundColor: 'blue',
  },
  primer: {
    paddingLeft: 16,
    fontSize: 18,
    fontFamily: 'Rubik-Regular',
     backgroundColor: 'green',//Colors.transparentColor,
  fontSize: 18,
  color: 'white',
  width: Dimensions.get('window').width
  }
});
