import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
} from 'react-native';

import StarRating from 'react-native-star-rating'

class Home extends React.Component {
  render() {
    return (
        <TouchableOpacity activeOpacity={0.75} style ={[{width: this.props.size, height: this.props.size, }, styles.container]}>
            <View style={{ flex:1}}>
                <Image style ={styles.image} source={this.props.imageURI} />
            </View>
            <View style= {styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>{this.props.description}</Text>
                <Text style={styles.description}>{this.props.name}</Text>
                <Text style={styles.price}> ${this.props.price} per night</Text>
                <StarRating 
                    fullStarColor = {'#008489'}
                    disable = {true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={10}
                />
            </View>
        </TouchableOpacity>
);
  }
}


export default Home;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5, 
    borderColor: 'rgba(0,0,0,0.1)',
    marginVertical:10, 
    borderRadius:5,
    overflow: 'hidden',
},
image:{
    flex: 1, 
    width: null, 
    height: null, 
    resizeMode: 'cover'
},
textContainer:{ 
    flex: 1, 
    alignItems: 'flex-start', 
    justifyContent: 'space-evenly', 
    paddingLeft: 10
},
title: {
    fontSize: 12, 
    fontWeight:'800',
    color: 'rgb(88,90,58)',
    textAlign: "left",
},
description:{ 
    fontSize: 12, 
    fontWeight: '700',
    color:'rgb(72,72,72)'
},
price: {
    fontSize: 10
}
});