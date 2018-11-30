import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Tag extends React.Component {
  render() {
    return (
        <TouchableOpacity style = {styles.container} onPress={this.props.onPressButton}>
            <Text style={{fontWeight:"700", fontSize:10}}>{this.props.title}</Text>
        </TouchableOpacity>
    );
  }
}


export default Tag;

const styles = StyleSheet.create({
  container: {
      minHeight:20, 
      minWidth:40, 
      padding:5, 
      backgroundColor:'white', 
      borderColor:'rgb(220,224,224)', 
      borderWidth: 0.6, 
      borderRadius:2, 
      marginRight: 5 
    },
});