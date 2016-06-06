import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'reactor';

export default class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{app}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
