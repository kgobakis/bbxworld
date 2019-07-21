import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation'
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';
import Toolbar from './Toolbar';
import styles from './styles';
import VideoPlayer from "./VideoPlayer";

class CameraScreen extends React.Component {
    camera = Camera;

    state = {
        captures: [],
        capturing: null,
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null,
        video: null,
        duration: null,
    };
    setCameraType = cameraType => this.setState({cameraType});
    handleCaptureIn = () => this.setState({capturing: true});
    handleCaptureIn = () => this.setState({capturing: true});

    handleCaptureOut = () => {
        if (this.state.capturing) this.camera.stopRecording();
    };

    handlePlayPause = () => {

    }
    handleLongCapture = async () => {
        const videoData = await this.camera.recordAsync();
        this.setState({
            capturing: false,
            captures: [videoData, ...this.state.captures],
        });
    };

    // componentDidMount() {
    //     this.playbackObject = new Audio.Sound();
    //     Audio.setAudioModeAsync({
    //         allowsRecordingIOS: true,
    //         interruptionModeIOS: 1,
    //         playsInSilentModeIOS: true,
    //         staysActiveInBackground: true,
    //         interruptionModeAndroid: 1,
    //         shouldDuckAndroid: true,
    //         playThroughEarpieceAndroid: true,
    //     })
    //
    // }

    async componentWillMount() {

        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = camera.status === 'granted' && audio.status === 'granted';
        this.setState({hasCameraPermission});
    }

    handleChooseVideo = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [16, 9],
        });
        if (!result.cancelled) {
            this.setState({video: result.uri});
        }

    };

    render() {
        let {video} = this.state;
        const {isFocused} = this.props

        const {
            hasCameraPermission,
            flashMode,
            cameraType,
            capturing,
        } = this.state;

        if (hasCameraPermission === null) {
            return <View/>;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }
        return (
            <React.Fragment>
                {video === null && isFocused &&
                <Camera
                    ratio={'16:9'}
                    type={cameraType}
                    style={styles.preview}
                    ref={camera => (this.camera = camera)}
                />}

                {video === null && isFocused &&
                <Toolbar
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onLongCapture={this.handleLongCapture}
                    handleCapture={this.handleChooseVideo}
                />}

                {video !== null && isFocused &&
                <VideoPlayer video={video} play={this.handlePlayPause} />}

            </React.Fragment>
        );
    }
}

export default withNavigationFocus(CameraScreen);
