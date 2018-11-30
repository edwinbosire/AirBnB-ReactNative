import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TextInput, 
  Platform, 
  StatusBar, 
  ScrollView, 
  Animated } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import Tag from './components/explore/Tag'
import Category from './components/explore/Category'
import Banner from './components/explore/Banner'
import GroupSection from './components/explore/GroupSection';

class Explore extends React.Component {

  componentWillMount() {

    this._scrollY = new Animated.Value(0)

    this.startHeaderHeight = 80
    this.endHeaderHeight = 50
    if (Platform.OS == 'android') {
        this.startHeaderHeight = 100 + StatusBar.currentHeight
        this.endHeaderHeight = 70 + StatusBar.currentHeight
    }

    this.animatedHeaderHeight = this._scrollY.interpolate({
      inputRange:[0,50],
      outputRange:[this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate ({
      inputRange:[this.endHeaderHeight, this.startHeaderHeight],
      outputRange:[0,1],
      extrapolate:'clamp'
    })

    this.animatedTagTop = this.animatedHeaderHeight.interpolate ({
      inputRange:[this.endHeaderHeight, this.startHeaderHeight],
      outputRange:[-30,10],
      extrapolate:'clamp'
    })

}

onPressTag = () => {
  console.log("Tag pressed")
}
  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={{ flex:1 }}>
        <Animated.View style={ [styles.headerView, {height: this.animatedHeaderHeight} ]}>
            <View style={ styles.headerSearchBar }>
                <Icon name="ios-search" size={20} style={{ marginRight: 10 , color:'rgb(48,48,48)'}}/>
                <TextInput 
                placeholder= 'Try "London" '
                placeHolderTextColor="grey"
                underlineColorAndroid='transparent'
                style={ styles.searchBarTextField }
                />
            </View>
            <Animated.View style={{ zIndex:0, flexDirection:'row', marginHorizontal: 20, top:this.animatedTagTop, opacity: this.animatedOpacity}}>
              <Tag title={'Dates'} onPressButton={this.onPressTag}/>
              <Tag title={'Filters'}/>
              <Tag title={'Guests'}/>
            </Animated.View>
          </Animated.View>
          <ScrollView 
          scrollEventThrottle= {16}
          onScroll={Animated.event (
            [{nativeEvent: {contentOffset: {y: this._scrollY}}}]
          )} 
          style={{paddingBottom: 20}}>
            <View style= {styles.featuredContent}>
              <Text style= {{fontSize: 24, fontWeight: '800', color:'rgb(72,72,72)', paddingHorizontal: 20}}>
                What can we help you find, Edwin?
              </Text>

              <View style={{height: 142, marginTop: 20}}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                  <Category imageSource = {require('../assets/home.jpg')} title="Homes" />
                  <Category imageSource = {require('../assets/experiences.jpg')} title="Experiences" />
                  <Category imageSource = {require('../assets/restaurant.jpg')} title="Restaurants" />
                </ScrollView>
              </View> 
              <Banner imageURI={require('../assets/plus.jpg')} title="Introducing AirBnB Plus" subtitle="A new selection of homes verified for quality and comfort" />

            </View>

              <GroupSection title='Homes around the world' subtitle="Explore some of the best-reviewed homes in the world"/>
              <GroupSection title='Homes in London' subtitle="A selection of home verified for quality and comfort" />

          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}


export default Explore;

const styles = StyleSheet.create({
  headerView: { 
    marginTop:20,
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: 'rgb(235,235,235)'
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
    marginTop: Platform.OS == 'android' ? 30 : null,
    zIndex:1,
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