import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Record from '../components/CameraScreen';
import Feed from '../navigation/Feed';
import MyVideos from '../navigation/MyVideos';
import { TouchableOpacity, View } from 'react-native';
import WelcomeScreen from '../navigation/WelcomeScreen';
import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Record,
    Feed,
    'My Videos': MyVideos,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;

          let iconName;
          if (routeName === 'Feed') {
            iconName = `md-home${focused ? '' : 'md-home'}`;
          } else if (routeName === 'My Videos') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          } else if (routeName === 'Record') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
          return <Icon name={iconName} size={25} color='pink'/>;
        },
      };
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
              <Icon name="md-home" color='pink' size={40} />
            </TouchableOpacity>
          </View>
        ),
      };
    },
  }
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator,
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
