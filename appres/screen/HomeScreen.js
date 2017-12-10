import React, {Component} from 'react';
import {View, TouchableHighlight, Text, Button} from 'react-native';
import {Icon, Thumbnail, Container, Content, Header, Left, Right, Body} from 'native-base';
import { StackNavigator } from 'react-navigation';
import Hometab from './Hometab';
const HomeScreen = ({ navigation }) => (
  <Container>
  <Container style={{ alignItems: 'stretch', flexDirection: 'row', height: 50, }}>
    <Container  style={{flex: 1, alignItems: 'stretch', height: 50, }}>
      <TouchableHighlight ><Icon name='ios-home'/></TouchableHighlight>
    </Container>
    <Container style={{flex: 1, alignItems: 'stretch', height: 50, }}>
      <TouchableHighlight onPress={() => navigation.navigate('Search')}><Icon name='ios-search'/></TouchableHighlight>
    </Container>
    <Container style={{flex: 1, alignItems: 'stretch', height: 50, }}>
      <TouchableHighlight onPress={() => navigation.navigate('Notification')}><Icon name='ios-notifications-outline'/></TouchableHighlight>
    </Container>
    <Container style={{flex: 1, alignItems: 'stretch', height: 50,}}>
      <TouchableHighlight onPress={() => navigation.navigate('Message')}><Icon name='ios-mail-outline'/></TouchableHighlight>
    </Container>
  </Container>
  <Hometab />
  </Container>
);
const HomeHeader = () => (
  <Container>
    <Header>
      <Left>
        <Thumbnail small source={require('./../pics/pic1.png')}/>
      </Left>
      <Body>
      <Text> Home</Text>
      </Body>
      <Right/>
    </Header>
  </Container>
);



const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;
