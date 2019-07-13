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
import {TouchableOpacity, View} from 'react-native';
import WelcomeScreen from '../navigation/WelcomeScreen';
import React from 'react';
import {Ionicons, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';

const DashboardTabNavigator = createBottomTabNavigator(
    {
        Record,
        Feed,
        'My Videos': MyVideos,
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                tabBarIcon: ({focused, tintColor}) => {
                    const {routeName} = navigation.state;

                    let iconName;

                    if (routeName === 'Feed') {
                        return <Ionicons name='ios-people' size={25} color={'black'}/>;
                    } else if (routeName === 'My Videos') {
                        return <Entypo name='folder-video' size={23} color={'black'}/>
                    } else if (routeName === 'Record') {
                        return <MaterialCommunityIcons name='microphone-variant' size={25} color={'black'}/>
                    }
                },
                tabBarOptions: {
                    activeTintColor: 'pink'
                }
            };
        },
        navigationOptions: ({navigation}) => {
            const {routeName} = navigation.state.routes[navigation.state.index];
            if (routeName === 'Record') {
                return {
                    header: null
                }
            }
            return {
                headerTitle: (
                    <View
                        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                            <MaterialCommunityIcons name="microphone-variant" color='pink' size={40}/>
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
    Welcome: {screen: WelcomeScreen},
    Dashboard: {screen: AppDrawerNavigator},
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
