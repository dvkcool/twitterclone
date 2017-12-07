import React, { Component } from 'react';
import {
  Container, Header, Left, Right, Content, Body, Thumbnail, Title,
  Text, Icon, Button, Card, CardItem, Tab, Tabs } from 'native-base';
import { Image, Dimensions, TouchableHighlight } from 'react-native';
export default class Tab1 extends Component {
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
         <Content>
         <Card style={{flex: 0}}>
             <CardItem>
               <Left>
                 <Thumbnail source={require("./creativity.png")} />
                 <Body>
                   <Text>Card view</Text>
                   <Text note>December 7, 2017</Text>
                 </Body>
               </Left>
             </CardItem>
             <CardItem cardBody>

               <Body>
                 <Image source={require("./etr.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                 <Text>
                 Hello, This is the general description of Tab2 do
                 </Text>
               </Body>

             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent textStyle={{color: '#87838B'}}>
                   <Icon name="logo-github" />
                   <Text>1,926 stars</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>

         </Content>

      </Container> ):null);
   }
  }
