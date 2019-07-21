/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - MyVideosStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import React, {Component} from 'react';
import AppContainer from './container/AppContainer';

export default class App extends Component {
    render() {
        return <AppContainer/>;
    }
}
