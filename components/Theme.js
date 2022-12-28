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
  }},
  dark: {dark: true,
  colors: {
    primary: '#131616',
    background: '#202124',
    card: '#303134',
    text: '#f1f1f1',
    border: '#e6edee',
    notification: '#e6edee',
  }}
})

export { Theme }