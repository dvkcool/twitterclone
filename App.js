import React, { Component } from 'react';
import {
  Container, Header, Left, Right, Content, Body, Thumbnail, Title,
  Text, Icon, Button, Card, CardItem, Tab, Tabs, TabHeading } from 'native-base';
import { Image, Dimensions, TouchableHighlight } from 'react-native';
import Tab1 from './appres/Tab1';
import Tab2 from './appres/Tab2';
import Tab3 from './appres/Tab3';
import Tab4 from './appres/Tab4';
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
         this.state.fontLoaded ?(<Container>
          <Header hasTabs>
            <Left>
              <TouchableHighlight>
              <Thumbnail small source={require("./creativity.png")}/>
              </TouchableHighlight>
             </Left>
             <Body>
               <Title>Header</Title>
             </Body>
          </Header>
          <Tabs initialPage={1}>
          <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={<TabHeading><Icon name="search" /></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={<TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
            <Tab3 />
          </Tab>
          <Tab heading={<TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
            <Tab4 />
          </Tab>
        </Tabs>

        </Container> ):null);
     }
    }
