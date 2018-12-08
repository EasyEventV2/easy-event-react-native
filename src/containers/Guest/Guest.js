import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { loadGuestsAPI } from '../../services/apis'
import styles from './styles'
import { createBottomTabNavigator } from 'react-navigation'

export class Accepted extends Component {
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
            if (resJSON.result[i].accepted === true && resJSON.result[i].check_in.checked === false)
              this.state.data.push(resJSON.result[i]);
          }
          this.setState({ loading: 1 }); //re-render
          this.setState({ loading: 0 });
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
                <View style={{}}>
                  <View style={styles.block1} >
                    <Text style={styles.text}> {item.name}</Text>
                    <View style={{ alignItems: "center" }}>
                      <Text style={{ fontSize: 15, color: "black", }}>Chưa check-in</Text>
                    </View>
                  </View>
                </View>
              }
            />

        }
      </View>
    )
  }
}

export class Unaccepted extends Component {
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
            if (resJSON.result[i].accepted === false)
              this.state.data.push(resJSON.result[i]);
          }
          this.setState({ loading: 1 }); //re-render
          this.setState({ loading: 0 });
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
              removeClippedSubviews={false}
              extraData={this.state.data}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) =>
                <View style={{}}>
                  <View style={styles.block1} >
                    <Text style={styles.text}> {item.name}</Text>
                    <View style={{ alignItems: "center" }}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {

                        }}>
                        <Text style={{ fontSize: 15, color: "black", }}>Duyệt</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              }
            />

        }
      </View>
    )
  }
}

export class Checked_in extends Component {
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
            if (resJSON.result[i].check_in.checked != false)
              this.state.data.push(resJSON.result[i]);
          }
          this.setState({ loading: 1 }); //re-render
          this.setState({ loading: 0 });
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
                <View style={{}}>
                  <View style={styles.block2}>
                      <Text style={styles.text}> {item.name}</Text>
                      <View style={{ justifyContent: "center" }}>
                        <Image
                          style={{ width: 45, height: 45 }}
                          source={require("../../../assets/images/ok.jpg")}
                        /></View>

                    </View>
                </View>
              }
            />

        }
      </View>
    )
  }
}

export default createBottomTabNavigator({
  Unaccepted: {
    screen: Unaccepted
  },
  Checked_in: {
    screen: Checked_in
  },
  Accepted: {
    screen: Accepted
  },

}, {
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
      },
      style: {
        justifyContent: "center",
        alignItems: "center",
      }
    }
  });