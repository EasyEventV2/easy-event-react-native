import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { loadGuestsAPI } from '../../services/apis'
import styles from './styles'

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      event_id: this.props.navigation.getParam('event_id'),
      loading: 1
    }
  }

  componentWillMount() {
    loadGuestsAPI(this.state.event_id)
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ loading: 0 });
        if (resJSON.message == 'OK') {
          for (var i = 0; i < resJSON.result.length; i++) {
            this.state.data.push(resJSON.result[i]);
          }
        }
        else {
          this.setState({ loading: -1 });
        }
      })
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.header}>Danh sách khách tham gia sự kiện</Text>
        {(this.state.loading === 1) ?
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#fb3" />
          </View>
          : (this.state.loading === -1) ?
          <View style={styles.loading}>
            <Text style={styles.text}>Không có khách nào đăng kí</Text>
          </View> 
          :
          <FlatList
            style={styles.list}
            data={this.state.data}
            extraData={this.state.data}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) =>
              <View>
                {(item.check_in.checked === false)
                  ? <View style={styles.block} >
                    <Text style={styles.text}> {item.name}</Text>
                    <View style={{ backgroundColor: "red", padding: 5 }}>
                      <Text style={styles.text}>Chưa check-in</Text>
                    </View>
                  </View>
                  : <View style={styles.block}>
                    <Text style={styles.text}> {item.name}</Text>
                    <View style={{ backgroundColor: "#73ef5d", padding: 5 }}>
                      <Text style={styles.text}>Đã check-in</Text>
                    </View>
                  </View>
                }
              </View>
            }
          />

        }
      </View>
    )
  }
}