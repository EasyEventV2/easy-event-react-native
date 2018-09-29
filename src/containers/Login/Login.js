import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { LoginAPI } from './../../services/apis'
import styles from './styles'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.modal}>
                    <View style={styles.container_text}>
                        <Text style={styles.text}>EASY EVENT</Text>
                    </View>

                    <View style={styles.modalLogin}>
                        <TextInput
                            placeholder="Enter username..."
                        >
                        </TextInput>
                        <TextInput
                            placeholder="Enter password..."
                        >
                        </TextInput>
                    </View>
                    <View
                        style={styles.button_container}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { }}
                        >
                            <Text>REGISTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { }}
                        >
                            <Text>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}