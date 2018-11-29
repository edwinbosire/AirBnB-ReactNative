import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image } from 'react-native';

class Category extends React.Component {
  render() {
    return (
        <View style={styles.container}> 
            <View style={{flex:2, overflow: 'hidden', borderTopRightRadius:4, borderTopLeftRadius:4}}>
                <Image source = {this.props.imageSource}
            style= {{flex: 2, width: null, height: null, resizeMode: 'cover',}} />
            </View>
                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                <Text style={ styles.title }> {this.props.title} </Text>
            </View>
      </View>
);
  }
}


export default Category;

const styles = StyleSheet.create({
  container: {
    height: 135, 
    width: 140, 
    marginLeft: 20, 
    borderWidth: 0.5, 
    borderRadius:4,
    backgroundColor:'white',
    borderColor: 'rgba(0,0,0,0.1)', 
    shadowColor:'black',
    shadowOffset:{ width: 0, height: 3 },
    shadowRadius:2,
    shadowOpacity:0.06,
  },
  title: {
    fontWeight:"800",
    fontSize: 14,
    color:'rgb(72,72,72)',
  }
});