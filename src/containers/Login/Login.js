import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { loginAPI } from './../../services/apis'
import styles from './styles'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onLogin = () => {
        if (this.state.password == '') {
            alert("Empty password!")
        }
        else {
            loginAPI(this.state.username, this.state.password)
                .then((res) => res.json())
                .then((resJSON) => {
                    if (this.state.password === resJSON.password && this.state.username === resJSON.name) {
                        this.props.navigation.navigate('Home');
                    }
                    else {
                        alert("FALSE PASSWORD.")
                    }
                })
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
                            onChangeText={(username) => this.setState({ username })}
                        >
                        </TextInput>
                        <TextInput
                            placeholder="Enter password..."
                            onChangeText={(password) => this.setState({ password })}
                            secureTextEntry={true}
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
                            onPress={this.onLogin}
                        >
                            <Text>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}