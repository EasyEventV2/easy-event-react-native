import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { QRcheckAPI } from './../../services/apis'
import styles from './styles'
import { RNCamera } from 'react-native-camera'

export default class QR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 0
        }
    }

    render() {
        if (this.state.checked == 0) {
            return (
                <View style={styles.screen}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.screen}
                        onBarCodeRead={
                            result => {
                                QRcheckAPI()
                                    .then(res => res.json())
                                    .then(resJSON => {
                                        if (result.data === resJSON.id) {
                                            this.setState({ checked: 1 })
                                        }
                                        else {
                                            this.setState({ checked: -1 })
                                            setTimeout(() => {
                                                this.setState({ checked: 0 })
                                            }, 1000)
                                        }
                                    })
                            }
                        }
                    >
                    </RNCamera>
                </View>
            );
        }
        else if (this.state.checked === 1) {
            return (
                <View style={styles.screen}>
                    <Text>CHECKED</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ checked: 0 })
                        }}>
                        <Text>Back to Camera</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        else {
            return (
                <View style={styles.screen}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.screen}
                        onBarCodeRead={
                            result => {
                                QRcheckAPI()
                                    .then(res => res.json())
                                    .then(resJSON => {
                                        if (result.data === resJSON.id) {
                                            this.setState({ checked: 1 })
                                        }
                                        else {
                                            this.setState({ checked: -1 })
                                            setTimeout(() => {
                                                this.setState({ checked: 0 })
                                            }, 1000)
                                        }
                                    })
                            }
                        }
                    >
                    </RNCamera>
                    <Text>NOT IN DATABASE</Text>
                </View>
            )
        }
    }
}