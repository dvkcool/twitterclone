import React, { Component } from 'react';
import {
  Container, Header, Left, Right, Content, Body, Thumbnail, Title,
  Text, Icon, Button, Card, CardItem, Tab, Tabs, TabHeading, StyleProvider } from 'native-base';
import { Image, Dimensions, TouchableHighlight, Platform, StatusBar  } from 'react-native';
import Tab1 from './appres/Tab1';
import Tab2 from './appres/Tab2';
import Notification from './appres/Notification';
import Messages from './appres/Messages';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
export default class App extends Component {
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
  render() {
  return (
         this.state.fontLoaded ?(<StyleProvider style={getTheme(material)}>
         <Container style={{paddingTop: Platform.OS ==`ios` ? 0 : Expo.Constants.statusBarHeight}}>
          <Header hasTabs >
            <Left>
              <TouchableHighlight>
              <Thumbnail small source={require("./appres/creativity.png")}/>
              </TouchableHighlight>

             </Left>
             <Body>
            <Title>Home</Title>
             </Body>
             <Right/>
          </Header>
          <Tabs initialPage={0}>
          <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={<TabHeading><Icon name="search" /></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={<TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
            <Notification />
          </Tab>
          <Tab heading={<TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
            <Messages />
          </Tab>
        </Tabs>

        </Container>
      </StyleProvider>):null);
     }
    }
