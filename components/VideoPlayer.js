import { StyleSheet, TouchableOpacity, View} from "react-native";
import {Video} from "expo-av";
import React from "react";
import {MaterialIcons} from "@expo/vector-icons";
import { winWidth, winHeight } from '../components/styles'

export default ({
                    video,
                    play,
                    mute,
                    volume
                }) => (
    <View style={styles.container}>
        <View>
            <Video
                ref={play}
                volume={volume}
                isMuted={mute}
                shouldPlay={true}
                isLooping={true}
                resizeMode={Video.RESIZE_MODE_CONTAIN}
                source={{uri: video}}
                isPortrait={true}
                playFromPositionMillis={0}
                style={{width: winWidth, height: winHeight}}
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
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-backspace"
                                   style={{fontSize: 30}}
                                   color={'pink'}
                                   onPress={() => this.props.navigation.navigate('Record')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);


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
