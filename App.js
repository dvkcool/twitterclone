import React, { Component } from 'react';
import { Container, Header, Left, Content, Body, Thumbnail, Title, Text, Icon, Button } from 'native-base';
import { Image } from 'react-native';
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
          <Header>
            <Left>
              <Button transparent>
                 <Icon name='menu' />
             </Button>
             </Left>
             <Body>
               <Title>Header</Title>
             </Body>
          </Header>
          <Content>
            <Text>
            Hi
            </Text>
            </Content>
        </Container> ):null);
     }
    }
