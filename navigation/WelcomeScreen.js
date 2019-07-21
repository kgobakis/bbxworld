import {Button, View} from "react-native";
import React from "react";

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom:20}}>
                <Button
                    title="Beatbox Now"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
                <Button title="Sign Up" onPress={() => alert('button pressed')}/>
            </View>
        );
    }
}
