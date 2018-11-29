import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

import Home from './Home'
import MoreButton from './MoreButton'

class GroupSection extends React.Component {
  render() {
    return (
        <View style={{ marginTop: 40}}>
            <Text style= {{ fontSize: 24, fontWeight: '800', color:'rgb(72,72,72)', paddingHorizontal: 20}}>{this.props.title} </Text>
            <Text style= {{ fontSize: 15, fontWeight: '400', color:'rgb(72,72,72)', paddingHorizontal: 20}}>{this.props.subtitle}  </Text>
            <View style= {{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
            <Home imageURI={require('../../../assets/tile-house.jpg')} size={width/2 - 30} name={'Tile House'} description={'PRIVATE ROOM•2BEDS'} price ={40} rating={3}/>
            <Home imageURI={require('../../../assets/pool-house.jpg')} size={width/2 - 30} name={'Private Pool House with Amazing Views!'} description={'CASTLE•TWENTYNINE PALMS'} price ={80} rating={4}/>
            <Home imageURI={require('../../../assets/joshua.jpg')} size={width/2 - 30} name={'Joshua Tree Homesteader Cabin'} description={'ENTIRE GUESTHOUSE•LOS ANGELES'} price ={121} rating={2}/>
            </View>
            <View style={{marginTop: 20}}>
                <MoreButton title={'Show all (2000+)'} />
            </View>

        </View>
);
  }
}


export default GroupSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});