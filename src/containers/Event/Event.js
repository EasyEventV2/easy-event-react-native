import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import { loadEventsAPI } from './../../services/apis'
import styles from './styles'

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        loadEventsAPI()
            .then(res => res.json())
            .then(resJSON => {
                for (var i = 0; i < resJSON.events.length; i++) {
                    data.push(resJSON.events[i])
                }
            })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList>
                    data= {this.state.data}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                </FlatList>
            </View>
        )
    }
}