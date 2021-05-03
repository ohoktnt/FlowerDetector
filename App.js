import React, {Component} from 'react';
import {View, Text, Image, StyleSheet}  from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'; 

export default class App extends Component {
  render() {
    return(<LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.linearGradient}></LinearGradient>);
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
})