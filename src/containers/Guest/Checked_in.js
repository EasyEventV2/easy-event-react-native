import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { loadGuestsAPI } from '../../services/apis';
import Foundation from 'react-native-vector-icons/Foundation';
import styles from './styles';

export default class Checked_in extends Component {
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
    tabBarLabel: 'Đã check-in',
    tabBarIcon: ({ tintColor }) => {
      return <Foundation name='ticket' size={25} color={tintColor} />
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

  componentDidMount() {
    loadGuestsAPI(this.state.event_id)
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ loading: 0 });
        if (resJSON.message == 'OK') {
          for (var i = 0; i < resJSON.result.length; i++) {
            if (resJSON.result[i].check_in.checked != false)
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
        <Text style={styles.header}>Khách đã check in</Text>
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
                <View style={styles.block2}>
                  <Text style={styles.text}> {item.name}</Text>
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={require("../../../assets/images/ok.jpg")}
                    /></View>
                </View>
              }
            />

        }
      </View>
    )
  }
}