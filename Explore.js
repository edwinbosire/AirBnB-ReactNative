import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ExploreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Saved!</Text>
      </View>
    );
  }
}


export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});