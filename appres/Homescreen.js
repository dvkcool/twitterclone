import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {Container, Header, Left, Right, Content, Body, Thumbnail, Title,
        Icon, Button, Card, CardItem  } from 'native-base';
import { Image, Dimensions, TouchableHighlight, View, ActivityIndicator, ListView, Text} from 'react-native';
import {AppLoading } from 'expo';
export default class HomeScreen extends Component {
 state = {
    isLoading: true,
  };

  componentDidMount() {

    return fetch('https://data.bandolier66.hasura-app.io/v1/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "type": "select",
        "args": {
            "table": "tweet",
            "columns": [
                "count",
                "des",
                "daydate",
                "img"

            ]
        }
      })

    })
    .then((response) => response.json())
    .then((responseJson) => {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(responseJson),
    }, function() {});
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
        </View>
      );
    }
    else{
      return (
        <Container>
          <ListView
          dataSource={this.state.dataSource}
          style={{paddingRight: 10,}}
          renderRow={(rowData) =>
            <Animatable.View
            key={rowData.count}
            animation={'bounce'}
            delay={rowData.count * 100}
            >
              <Card style={{flex: 1}}>
                <CardItem>
                  <Left>
                  <Thumbnail source={require("./pics/hasura.png")} />
                  <Body>
                  <Text>Hasura</Text>
                  <Text note>@HasuraHQ,{rowData.daydate}</Text>
                  </Body>
                  </Left>
                </CardItem>
                  <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                  <Body>
                  <Text>
                  {rowData.des}
                  </Text>
                  <Image source={{ uri: rowData.img }} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
                  </Body>
                </CardItem>
                  <CardItem style={{paddingLeft: 70, paddingTop:0}}>
                  <Icon name="ios-text-outline" /><Text>12          </Text>
                  <Icon name="ios-repeat" /><Text>25          </Text>
                  <Icon name="ios-heart-outline" /><Text>20         </Text>
                  <Icon name="ios-mail-outline" /><Text>21          </Text>
                </CardItem>
              </Card>
            </Animatable.View>
          }
          />
        </Container>);

    }
  }


}
