import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Notification extends Component {
  render() {
    var items = ['1','2','3','4','5'];
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>Notification {item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
