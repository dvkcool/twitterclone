import React, {Component} from 'react';
import { View, Platform} from 'react-native';
import { Container, Content, Text, Header, Footer, Icon, Left,
          Right, Body, StyleProvider, List, ListItem  } from 'native-base';
import { StackNavigator } from 'react-navigation';
import {AppLoading } from 'expo';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
export default class Searchscreen extends Component{

render(){
    var items = ['1','2','3','4','5'];
  return(
    <StyleProvider style={getTheme(material)}>
    <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>Search result {item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>

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
