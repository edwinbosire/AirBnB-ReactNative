import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Saved extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Saved Content will appear here!</Text>
      </View>
    );
  }
}


export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});