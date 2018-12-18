import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
} from 'react-native';
import { loadGuestsAPI, acceptGuestsAPI } from '../../services/apis';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Accepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      event_id: this.props.navigation.getParam('event_id'),
      loading: 1,
      refreshing: false,
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Đã duyệt',
    tabBarIcon: ({ tintColor }) => {
      return <FontAwesome name='thumbs-o-up' size={25} color={tintColor} />
    }
  }

  handleRefresh = () => {
    this.setState({
      data: [],
      refreshing: true,
    },
      () => {
        this.componentDidMount();
        this.setState({ refreshing: false })
      });
  }

  onLoadToken = async () => {
    try {
      const value = await AsyncStorage.getItem('myToken');
      this.setState({ token: value })
    } catch (error) {
      // Error retrieving data
    }
  }

  componentDidMount() {
    loadGuestsAPI(this.state.event_id)
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ loading: 0 });
        if (resJSON.message == 'OK') {
          for (var i = 0; i < resJSON.result.length; i++) {
            if (resJSON.result[i].accepted === true && resJSON.result[i].check_in.checked === false)
              this.state.data.push(resJSON.result[i]);
          }
          if (this.state.data.length == 0) {
            this.setState({ loading: -1 });
          }
          else {
            this.setState({ loading: 1 }); //re-render
            this.setState({ loading: 0 });
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
        <Text style={styles.header}>Khách được chấp nhận đến sự kiện</Text>
        {(this.state.loading === 1) ?
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#fb3" />
          </View>
          : (this.state.loading === -1) ?
            <View style={styles.loading}>
              <Text style={styles.text}>Không có khách nào</Text>
            </View>
            :
            <FlatList
              style={styles.list}
              data={this.state.data}
              extraData={this.state.data}
              keyExtractor={(item) => item.toString()}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
              renderItem={({ item }) =>
                <View style={styles.block1} >
                  <Text style={styles.text}> {item.name}</Text>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 15, color: "black", }}>Chưa check-in</Text>
                  </View>
                </View>
              }
            />

        }
      </View>
    )
  }
}