import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Platform,
} from 'react-native';
import { loadEventsAPI } from './../../services/apis'
// import styles from './styles'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: 1,
        }
    }

    componentWillMount() {
        loadEventsAPI()
            .then(res => res.json())
            .then(resJSON => {
                for (var i = 0; i < resJSON.events.length; i++) {
                    this.state.data.push(resJSON.events[i])
                }
                console.log(this.state.data)
                this.setState({loading: 0})
            })
    }

    render() {
        if (this.state.loading === 0){
            return (
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.state.data}
                        extraData={this.state.data}
                        keyExtractor={(item, index) => index}
                        renderItem={( {item} ) =>
                            <View style={styles.GridViewBlockStyle}>
                                <TouchableOpacity
                                    onPress={() => { }}
                                >
                                    <Text style={styles.GridViewInsideTextItemStyle}>
                                        {item.description}
                                    </Text>
                                </TouchableOpacity>
                            </View>}
                        numColumns={1}
                    />
                    <Text>AHIHI</Text>
                </View>
            )
        }
        else {
            return(
                <View><Text>LOADING....</Text></View>
            )
        }
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#00BCD4',
        borderWidth: 1
    },
    GridViewInsideTextItemStyle: {
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
    },
    subbutton: {
        marginTop: 10,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#00BCD4',
        borderRadius: 10,                        //button with curves
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: "center",
        flex: 1 / 2,
    },
    button: {
        flexDirection: "row",
        flex: 1 / 3,
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "gray"
    },
    button2: {
        flexDirection: "row",
        flex: 1 / 2,
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "gray"
    },
});