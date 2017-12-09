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
                 <Thumbnail source={require("./pics/pic1.png")} />
                 <Body>
                   <Text>User1</Text>
                   <Text note>December 7, 2017</Text>
                 </Body>
               </Left>
             </CardItem>
             <CardItem cardBody>
               <Body>
                 <Image source={require("./pics/pic1.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                 <Text>
                This is a tweet of user1
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
           <Card style={{flex: 0}}>
               <CardItem>
                 <Left>
                   <Thumbnail source={require("./pics/pic2.png")} />
                   <Body>
                     <Text>User2</Text>
                     <Text note>December 7, 2017</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Body>
                   <Image source={require("./pics/pic2.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                   <Text>
                  This is a tweet of user2
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
             <Card style={{flex: 0}}>
                 <CardItem>
                   <Left>
                     <Thumbnail source={require("./pics/pic3.png")} />
                     <Body>
                       <Text>User3</Text>
                       <Text note>December 7, 2017</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem cardBody>
                   <Body>
                     <Image source={require("./pics/pic3.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                     <Text>
                     This is a tweet of user3
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
               <Card style={{flex: 0}}>
                   <CardItem>
                     <Left>
                       <Thumbnail source={require("./pics/pic4.png")} />
                       <Body>
                         <Text>User4</Text>
                         <Text note>December 7, 2017</Text>
                       </Body>
                     </Left>
                   </CardItem>
                   <CardItem cardBody>
                     <Body>
                       <Image source={require("./pics/pic4.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                       <Text>
                       This is a tweet of user 4
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
