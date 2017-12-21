import React, {Component} from 'react';
import { View, TouchableHighlight, Platform} from 'react-native';
import { Container, Content, Text, Header, Footer, Tab, Tabs, TabHeading, Icon, Left,
          Right, Body, Thumbnail, Title, Item, Card, Input, Button, StyleProvider, Fab  } from 'native-base';
import { StackNavigator } from 'react-navigation';
import {AppLoading } from 'expo';
import Homescr from './Homescreen';
import Notification from './Notification';
import Messages from './Messages';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
import Entypo from 'react-native-vector-icons/Entypo';
export default class Searchscreen extends Component{
render(){
  return(
    <StyleProvider style={getTheme(material)}>
    <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
        <Header searchBar rounded>
          <Item>
          <TouchableHighlight  onPress={() => this.props.navigation.navigate('Home')}>
          <Icon name="ios-arrow-round-back-outline" style={{color:'blue',}}/>
          </TouchableHighlight>
            <Input placeholder="Search Twitter " />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
         </Header>
         <Body>
          <Card style={{flex:0, width:300}}>
            <Text> Search Results</Text>
          </Card>
          <Card  style={{flex:0, width:300}}>
            <Text> Search Results</Text>
          </Card>
          <Card  style={{flex:0, width:300}}>
            <Text> Search Results</Text>
          </Card>
          <Card  style={{flex:0, width:300}}>
            <Text> Search Results</Text>
          </Card>

         </Body>
         <Footer style={{backgroundColor:'#fff'}}>
          <Left>
            <Text style={{color:'blue',}}>All </Text>
          </Left>
          <Body>
            <Text style={{color:'grey'}}> Mentions</Text>
          </Body>
          <Right>
            <Icon name="ios-settings-outline" style={{color:'blue'}}/>
          </Right>
         </Footer>
      </Container>
      </StyleProvider>
  );
}

}
