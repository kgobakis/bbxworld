import {Dimensions, StyleSheet, View} from "react-native";
import {Video} from "expo-av";
import React from "react";
import {MaterialIcons} from "@expo/vector-icons";


export default class VideoPlayer extends React.Component {

    render() {
        let captures = this.props.captures;
        return (
            <View style={styles.container}>
                <View>

                    <Video
                        shouldPlay={true}
                        isLooping={true}
                        resizeMode={Video.RESIZE_MODE_CONTAIN}
                        source={{uri: captures}}
                        isPortrait={true}
                        playFromPositionMillis={0}
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height  }}
                    />
                    <View style={styles.controlBar}>
                        <MaterialIcons
                            name={"volume-up"}
                            size={45}
                            color="white"
                        />
                        <MaterialIcons
                            name={"play-arrow"}
                            size={45}
                            color="white"
                        />
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    }
});
