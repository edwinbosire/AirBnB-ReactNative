import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Trips extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Trips!</Text>
      </View>
    );
  }
}


export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});