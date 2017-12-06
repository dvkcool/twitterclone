import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class sidebar extends Component {
  render() {
    return (
        <Container>
          <Header />
          <Content>
            <Text>Square Thumbnail</Text>
            <Thumbnail square source={{uri: './creativity'}} />
            <Thumbnail square small source={{uri: './creativity'}} />
            <Text>Circular Thumbnail</Text>
            <Thumbnail source={{uri: './creativity'}} />
            <Thumbnail large source={{uri: './creativity'}} />
          </Content>
        </Container> );
     }
    }
