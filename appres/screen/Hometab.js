import React, { Component } from 'react';
import {Container, Header, Left, Right, Content, Body, Thumbnail, Title,
 Icon, Button, Card, CardItem, Text } from 'native-base';
import { Image, Dimensions, TouchableHighlight, View} from 'react-native';
import {AppLoading } from 'expo';
export default class Hometab extends Component {
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
  if (!this.state.fontLoaded) {
  return (
    <AppLoading
      startAsync={this.componentWillMount}
      onFinish={() => this.setState({ fontLoaded: true })}
      onError={console.warn}
    />
  );
}
else{
  return (

           <Content>
           <Card style={{flex: 1}}>
               <CardItem>
                 <Left>
                   <Thumbnail source={require("./../pics/pic1.png")} />
                   <Body>
                     <Text>User1</Text>
                     <Text note>December 7, 2017</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                 <Body>
                   <Image source={require("./../pics/pic1.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                   <Text>
                  This is a tweet of user1
                   </Text>
                 </Body>
               </CardItem>
               <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                  <Icon name="ios-text-outline" /><Text>12          </Text>
                  <Icon name="ios-repeat" /><Text>25          </Text>
                  <Icon name="ios-heart-outline" /><Text>20         </Text>
                  <Icon name="ios-mail-outline" /><Text>21          </Text>
               </CardItem>
             </Card>
             <Card style={{flex: 1}}>
                 <CardItem>
                   <Left>
                     <Thumbnail source={require("./../pics/pic1.png")} />
                     <Body>
                       <Text>User1</Text>
                       <Text note>December 7, 2017</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                   <Body>
                     <Image source={require("./../pics/pic1.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                     <Text>
                    This is a tweet of user1
                     </Text>
                   </Body>
                 </CardItem>
                 <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                    <Icon name="ios-text-outline" /><Text>12          </Text>
                    <Icon name="ios-repeat" /><Text>25          </Text>
                    <Icon name="ios-heart-outline" /><Text>20         </Text>
                    <Icon name="ios-mail-outline" /><Text>21          </Text>
                 </CardItem>
               </Card>
               <Card style={{flex: 1}}>
                   <CardItem>
                     <Left>
                       <Thumbnail source={require("./../pics/pic1.png")} />
                       <Body>
                         <Text>User1</Text>
                         <Text note>December 7, 2017</Text>
                       </Body>
                     </Left>
                   </CardItem>
                   <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                     <Body>
                       <Image source={require("./../pics/pic1.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                       <Text>
                      This is a tweet of user1
                       </Text>
                     </Body>
                   </CardItem>
                   <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                      <Icon name="ios-text-outline" /><Text>12          </Text>
                      <Icon name="ios-repeat" /><Text>25          </Text>
                      <Icon name="ios-heart-outline" /><Text>20         </Text>
                      <Icon name="ios-mail-outline" /><Text>21          </Text>
                   </CardItem>
                 </Card>
                 <Card style={{flex: 1}}>
                     <CardItem>
                       <Left>
                         <Thumbnail source={require("./../pics/pic1.png")} />
                         <Body>
                           <Text>User1</Text>
                           <Text note>December 7, 2017</Text>
                         </Body>
                       </Left>
                     </CardItem>
                     <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                       <Body>
                         <Image source={require("./../pics/pic1.png")} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                         <Text>
                        This is a tweet of user1
                         </Text>
                       </Body>
                     </CardItem>
                     <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                        <Icon name="ios-text-outline" /><Text>12          </Text>
                        <Icon name="ios-repeat" /><Text>25          </Text>
                        <Icon name="ios-heart-outline" /><Text>20         </Text>
                        <Icon name="ios-mail-outline" /><Text>21          </Text>
                     </CardItem>
                   </Card>
           </Content>
);

}
   }
  }
