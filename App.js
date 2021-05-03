import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#a8e063', '#56ab2f']}
        style={styles.linearGradient}>
        {/* Title and subtitle */}
        <View>
          <Text>Find Flowers</Text>
          <Text>Python Neural Network</Text>
        </View>
        {/* Output */}
        <View>
          <Text>Output</Text>
        </View>
        {/* Buttons */}
        <View>
          <Button
            title="Camera Roll"
            buttonStyle={styles.button}
            containerStyle={{margin: 5}}
            titleStyle={{fontSize: 20}}></Button>
          <Button
            title="Take a Photo"
            buttonStyle={styles.button}
            containerStyle={{margin: 5}}
            titleStyle={{fontSize: 20}}></Button>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
