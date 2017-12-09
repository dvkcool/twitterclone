import React, {Component } from 'react';
import { View, Text, Platform, StatusBar, TouchableHighlight } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import {Header, Left, Right, Content, Container, Body, Title, Thumbnail,
        StyleProvider} from 'native-base';
import {AppLoading } from 'expo';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import Homescreen from './Homescreen';
import Searchscreen from './Searchscreen';
import Notifscreen from './Notification';
import Messages from './Messages';
const RootTabs = TabNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={'ios-home'}
            size={26}
            style={{ color: tintColor }}
          />
      ),
    },
  },
  Search: {
    screen: Searchscreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={'ios-search'}
            size={26}
            style={{ color: tintColor }}
          />
      ),
    },
  },
  Notifscreen:{
    screen: Notifscreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={'ios-notifications-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      ),
    },
  },
  Messages:{
    screen: Messages,
    navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
              name={'ios-mail-outline'}
              size={26}
              style={{ color: tintColor }}
            />
      ),
    },
  }
},{ tabBarOptions:{
  showIcon: true,
  showLabel: false,
  activeTintColor: '#3190F6',
  inactiveTintColor: 'grey',
  indicatorStyle: {
    backgroundColor: '#3190F6',
  },
  style: {
    backgroundColor: 'white',
    paddingTop: 0,
  },
}});
class Basescreen extends Component{
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({ fontLoaded: true });
}
  render(){
    if (!this.state.fontLoaded) {
    return (
      <AppLoading
        startAsync={this.componentWillMount}
        onFinish={() => this.setState({ fontLoaded: true })}
        onError={console.warn}
      />
    );
  }
  else{
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
          <Header hasTabs>
            <Left>
              <TouchableHighlight>
              <Thumbnail small source={require("./creativity.png")}/>
              </TouchableHighlight>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right/>
          </Header>
          <RootTabs/>
        </Container>
      </StyleProvider>
    );
  }

  }
};


export default Basescreen;
