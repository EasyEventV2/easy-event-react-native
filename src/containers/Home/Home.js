import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  Platform,
  ImageBackground,
} from 'react-native';
import { loadEventsAPI } from './../../services/apis'
import styles from './styles'

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
        this.setState({ loading: 0 })
      })
  }

  render() {
    if (this.state.loading === 0) {
      return (
        <View style={styles.screen}>
          <View style = {styles.header}>
            <Text style={styles.header_text}>
              EVENTS
          </Text>
          </View>

          <FlatList
            style={styles.list}
            data={this.state.data}
            extraData={this.state.data}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) =>
              <View style={styles.block_list}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("QR", {
                      eventname: item.name
                    })
                  }}
                >
                  <ImageBackground
                    source={{ uri: item.dataURI }}
                    style={styles.imageBackground}>
                    <View style={styles.block_footer}>
                      <Text style={styles.block_text}>
                        {item.name}
                      </Text>
                      <Text style={styles.block_text}>
                        {item.description}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>}
            numColumns={1}
          />
        </View>
      )
    }
    else {
      return (
        <View style={styles.screen}>
          <ActivityIndicator size="large" color="#fb3" />
        </View>
      )
    }
  }
}
