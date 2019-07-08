import {Text, View} from "react-native";
import React from "react";

export default class MyVideos extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>My Videos</Text>
            </View>
        );
    }
}
