import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import Homescreen from './appres/Homescreen';
import Searchscreen from './appres/Searchscreen';
import Notifscreen from './appres/Notification';
import Messages from './appres/Messages';
const RootTabs = TabNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={'ios-home'}
            size={26}
            style={{ color: tintColor }}
          />
      ),
    },
  },
  Search: {
    screen: Searchscreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={'ios-search'}
            size={26}
            style={{ color: tintColor }}
          />
      ),
    },
  },
  Notifscreen:{
    screen: Notifscreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={'ios-notifications-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      ),
    },
  },
  Messages:{
    screen: Messages,
    navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
              name={'ios-mail-outline'}
              size={26}
              style={{ color: tintColor }}
            />
      ),
    },
  }
},{ tabBarOptions:{
  showIcon: true,
  showLabel: false,
  activeTintColor: '#3190F6',
  inactiveTintColor: 'grey',
  indicatorStyle: {
    backgroundColor: '#3190F6',
  },
  style: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
  },
}});

export default RootTabs;
