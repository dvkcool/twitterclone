import React from 'react';
import { View, Text, TouchableHighlight, Platform} from 'react-native';
import { Container, Content, Header, Tab, Tabs, TabHeading, Icon, Left,
          Right, Body, Thumbnail, Title, Item, Input, Button, StyleProvider } from 'native-base';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Homescr from './Homescreen';
import Notification from './Notification';
import Messages from './Messages';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
const HomeScreen = ({ navigation }) => (
 <StyleProvider style={getTheme(material)}>
  <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
    <Header hasTabs>
      <Left>
        <TouchableHighlight>
        <Thumbnail small source={require("./creativity.png")}/>
        </TouchableHighlight>
      </Left>
      <Body>
        <Text>Home</Text>
      </Body>
      <Right/>
    </Header>
    <Tabs locked={true}>
    <Tab heading={ <TabHeading><Icon name="ios-home" /></TabHeading>}>
    <Homescr />
    </Tab>
    <Tab heading={ <TabHeading><TouchableHighlight onPress={() => navigation.navigate('Search')} ><Icon name="ios-search"/></TouchableHighlight></TabHeading>}  >
    </Tab>
    <Tab heading={ <TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
    <Notification/>
    </Tab>
    <Tab heading={ <TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
    <Messages/>
    </Tab>
    </Tabs>

  </Container>
   </StyleProvider>
);

const SearchScreen = ({ navigation }) => (
  <StyleProvider style={getTheme(material)}>
  <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
      <Header searchBar rounded>
        <Item>
        <TouchableHighlight  onPress={() => navigation.navigate('Home')}>
        <Icon name="ios-arrow-round-back-outline"/>
        </TouchableHighlight>
          <Input placeholder="Search Twitter " />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
       </Header>
    </Container>
    </StyleProvider>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default RootNavigator;
