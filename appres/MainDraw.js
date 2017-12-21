import React, {Component} from 'react';
import { View, TouchableOpacity, Platform} from 'react-native';
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
export default class Mainsc extends Component {
  render(){
    return(  <StyleProvider style={getTheme(material)}>
       <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
         <Header hasTabs>
           <Left>
             <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerOpen')}>
             <Thumbnail small source={require('./pics/dvk.png')}/>
             </TouchableOpacity>
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
         <Tab heading={ <TabHeading><TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} ><Icon name="ios-search"/></TouchableOpacity></TabHeading>}  >
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
