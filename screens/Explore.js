import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TextInput, 
  Platform, 
  StatusBar, 
  ScrollView, Dimensions, Image } from 'react-native';
  const { width } = Dimensions.get('window')

import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/explore/Category'
import Banner from './components/explore/Banner'
import Home from './components/explore/Home'

class Explore extends React.Component {

  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
        this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
}

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex:1 }}>
        <View style={ [styles.headerView, {height: this.startHeaderHeight} ]}>
            <View style={ styles.headerSearchBar }>
                <Icon name="ios-search" size={20} style={{ marginRight: 10 }}/>
                <TextInput 
                placeholder= 'Try "London" '
                placeHolderTextColor="grey"
                underlineColorAndroid='transparent'
                style={ styles.searchBarTextField }
                />
            </View>
          </View>
          <ScrollView scrollEventThrottle= {16}>
            <View style= {styles.featuredContent}>
              <Text style= {{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                What can we help you find, Edwin?
              </Text>

              <View style={{height: 130, marginTop: 20}}>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                  <Category imageSource = {require('../assets/home.jpg')} title="Home" />
                  <Category imageSource = {require('../assets/experiences.jpg')} title="Experiences" />
                  <Category imageSource = {require('../assets/restaurant.jpg')} title="Restaurant" />
                  <Category imageSource = {require('../assets/home.jpg')} title="Home" />
                </ScrollView>
              </View> 
              <Banner imageURI={require('../assets/home.jpg')} title="Introducing AirBnB Plus" subtitle="A new selection of homes verified for quality and comfort" />

            </View>
            <View style={{ marginTop: 40}}>
              <Text style= {{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}> Homes around the world </Text>
              <View style= {{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
                <Home imageURI={require('../assets/tile-house.jpg')} size={width/2 - 30} name={'Tile House'} description={'PRIVATE ROOM•2BEDS'} price ={40} rating={3}/>
                <Home imageURI={require('../assets/pool-house.jpg')} size={width/2 - 30} name={'Private Pool House with Amazing Views!'} description={'CASTLE•TWENTYNINE PALMS'} price ={80} rating={4}/>
                <Home imageURI={require('../assets/joshua.jpg')} size={width/2 - 30} name={'Joshua Tree Homesteader Cabin'} description={'ENTIRE GUESTHOUSE•LOS ANGELES'} price ={121} rating={2}/>

              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}


export default Explore;

const styles = StyleSheet.create({
  headerView: { 
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: '#dddddd'
  },
  headerSearchBar: { 
    flexDirection: 'row', 
    padding: 10, 
    marginHorizontal: 20,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == 'android' ? 30 : null
    },
  searchBarTextField: {
    flex: 1, 
    fontWeight: '700', 
    backgroundColor: 'white'
  },
  featuredContent: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
  }
});