import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MoreButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}


export default MoreButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(0, 132, 137)',
    borderWidth:1,
    borderRadius:5,
    marginHorizontal:20,
    padding:15,

  },
  title: {
    color:'rgb(0, 132, 137)',
    fontWeight:'800',
    fontSize:14,
  }
});