import React from 'react';
import {Camera} from 'expo-camera';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import styles from './styles';

const {Type: CameraTypes} = Camera.Constants;
export default ({
                    capturing = false,
                    cameraType = CameraTypes.back,
                    setCameraType,
                    onCaptureIn,
                    onCaptureOut,
                    onLongCapture,
                    handleCapture,
                }) => (
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col size={2} style={styles.alignCenter}>
                <TouchableOpacity onPress={handleCapture}>
                    <Ionicons name="ios-images" style={{color: 'pink', fontSize: 36}}/>
                </TouchableOpacity>
            </Col>
            <Col style={styles.topToolbar}>
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-backspace"
                                            style={{fontSize: 30}}
                                            color={'pink'}
                    />
                </TouchableOpacity>
            </Col>
            <Col size={2} style={styles.alignCenter}>
                <TouchableWithoutFeedback
                    onPressIn={onCaptureIn}
                    onPressOut={onCaptureOut}
                    onLongPress={onLongCapture}>
                    <View
                        style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal}/>}
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableOpacity
                    onPress={() =>
                        setCameraType(
                            cameraType === CameraTypes.back
                                ? CameraTypes.front
                                : CameraTypes.back
                        )
                    }>
                    <Ionicons name="ios-reverse-camera" color="pink" size={30}/>
                </TouchableOpacity>
            </Col>
        </Row>
    </Grid>
);
