import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import {Text} from 'react-native';
export default class Searchscreen extends Component {
  render() {
    return ( <Container>
     <Button transparent>
     <Text>Search</Text>
      </Button>
       </Container>);
    }
  }
