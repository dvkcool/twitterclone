import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import {Text} from 'react-native';
export default class Searchscreen extends Component {
  render() {
    return (<Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>);
    }
  }
