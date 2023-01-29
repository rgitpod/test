import { StyleSheet } from 'react-native'


const Theme = StyleSheet.create({
  light: {dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#e7e8e7',
    card: 'rgb(255, 255, 255)',
    text: '#0f0f0f',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    number: '#c0c1c4',
    litera0: '#5c5c5c'
  }},
  dark: {dark: true,
  colors: {
    primary: '#131616',
    background: '#303134',
    card: '#5C5F66',
    text: '#f1f1f1',
    border: '#e6edee',
    notification: '#e6edee',
    number: '#101113',
    litera0: '#0f0f0f'
  }}
})

export { Theme }