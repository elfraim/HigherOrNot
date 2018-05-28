import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Higher or Not'} />
        <Card />
      </View>
    );
  }
}

