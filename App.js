/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Counter from './src/components/Counter';
import IncreaseCounter from './src/components/IncreaseCounter';
import DecreaseCounter from './src/components/DecreaseCounter';
import IncreaseByTwoCounter from './src/components/IncreaseByTwoCounter';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 50}}>Ford Otosan</Text>
        <Text style={{marginBottom: 50}}>Yusuf Pamukçu</Text>
        <Counter />
        <IncreaseCounter />
        <DecreaseCounter />
        <IncreaseByTwoCounter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
    alignItems: 'center',
  },
});
