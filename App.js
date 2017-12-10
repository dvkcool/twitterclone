import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import Mainscreen from './appres/Mainscreen';
import Sidebar from './appres/Sidebar';
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Mainscreen  },
  },
  {
    // passing all route info as props to the custom Sidebar component
    contentComponent: props => <Sidebar {...props} />
  }
);
export default HomeScreenRouter;
