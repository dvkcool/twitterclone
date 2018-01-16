import React, {Component} from 'react';
import { View, TouchableOpacity, Platform} from 'react-native';
import { Container, Content, Text, Header, Footer, Tab, Tabs, TabHeading, Icon, Left,
          Right, Body, Thumbnail, Title, Item, Card, Input, Button, StyleProvider, Fab, H3  } from 'native-base';
import { StackNavigator } from 'react-navigation';
import {AppLoading } from 'expo';
import Homescr from './Homescreen';
import Notification from './Notification';
import Messages from './Messages';
import Searchscreen from './Searchscreen';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
import Entypo from 'react-native-vector-icons/Entypo';
export default class Mainsc extends Component {
constructor(props) {
  super(props);
  this.state = {
    screen: 0
  };
  this.changeheader = this.changeheader.bind(this);
}
changeheader = (data) => {
      this.setState({screen: data});
      console.log(this.state.screen);
   }
  render(){

    return(  <StyleProvider style={getTheme(material)}>
       <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
             <HomeText screen = {this.state.screen} navigation={this.props.navigation}/>
         <Tabs  onChangeTab={({ i, ref, from }) => this.setState({ screen: i })} >
         <Tab heading={ <TabHeading><Icon name="ios-home" /></TabHeading>}>
         <Homescr />
         </Tab>
         <Tab heading={ <TabHeading><Icon name="ios-search"/></TabHeading>}  >
         <Searchscreen/>
         </Tab>
         <Tab heading={ <TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
         <Notification/>
         </Tab>
         <Tab heading={ <TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
         <Messages/>
         </Tab>
         </Tabs>
         <View>
         <Fab
         style={{ backgroundColor: '#5067FF' }}
         position="bottomRight">
         <Entypo
              name={'feather'}
              size={26}/>
         </Fab>
         </View>
       </Container>
        </StyleProvider>);
  }


  }
  class HomeText extends Component{
    render(){
      if(this.props.screen===0){
        return(
          <Header hasTabs>
            <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Thumbnail small source={require('./pics/dvk.png')}/>
              </TouchableOpacity>
            </Left>
            <Body>
              <H3> Home</H3>
            </Body>
            <Right/>
          </Header>
        );
      }
      if(this.props.screen===1){
        return(
          <Header searchBar rounded>
            <Item>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name="ios-menu-outline" style={{color:'blue',}}/>
            </TouchableOpacity>
              <Input placeholder="Search Twitter " />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
           </Header>
        );
      }
      if(this.props.screen===2){
        return(
          <Header hasTabs>
            <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name="ios-menu-outline" style={{color:'blue',}}/>
            </TouchableOpacity>
            </Left>
            <Body>
              <H3> Notification </H3>
            </Body>
            <Right/>
          </Header>
        );
      }
      if(this.props.screen===3){
        return(
          <Header hasTabs>
            <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name="ios-menu-outline" style={{color:'blue',}}/>
            </TouchableOpacity>
            </Left>
            <Body>
              <H3> Message</H3>
            </Body>
            <Right/>
          </Header>
        );
      }
      return(
        <Text> Fault</Text>
      );
    }
  }
