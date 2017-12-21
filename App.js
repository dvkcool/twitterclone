import React, {Component } from 'react';
import Expo from "expo";
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import Mainscreen from './appres/MainDraw';
import Sidebar from './appres/Sidebar';
import Searchscreen from './appres/Searchscreen';
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Mainscreen  },
    Search: {
      screen: Searchscreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default class App extends Component{
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreenRouter />;
  }
}
