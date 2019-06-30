import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BoardsScreen } from '../screens/BoardsScreen';
import { ExportScreen } from '../screens/ExportScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const BoardsStack = createStackNavigator(
  {
    Boards: BoardsScreen,
  },
  config
);

BoardsStack.navigationOptions = {
  tabBarLabel: 'Boards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

BoardsStack.path = '';

const ExportStack = createStackNavigator(
  {
    Export: ExportScreen,
  },
  config
);

ExportStack.navigationOptions = {
  tabBarLabel: 'Export',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ExportStack.path = '';

const tabNavigator = createSwitchNavigator({
  BoardsStack,
  ExportStack,
}, {
  initialRouteName: "BoardsStack"
});

tabNavigator.path = '';

export default tabNavigator;
