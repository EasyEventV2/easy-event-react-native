import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { QRcheckAPI } from './../../services/apis'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import { RNCamera } from 'react-native-camera'

export default class QR extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: 0,
      time: null,
      name: null,
      token: null,
      user_id: null,
    }
  }

  onLoadToken = async () => {
    try {
      const value = await AsyncStorage.getItem('myToken');
      this.setState({ token: value })
    } catch (error) {
      // Error retrieving data
    }
  }

  onLoadUserId = async () => {
    try {
      const value = await AsyncStorage.getItem('myUserId');
      this.setState({ user_id: value })
    } catch (error) {
      // Error retrieving data
    }
  }

  componentWillMount() {
    this.onLoadToken();
    this.onLoadUserId();
  }


  render() {
    if (this.state.checked === 0) {
      return (
        <View style={styles.screen}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.camera_screen}
            onBarCodeRead={
              result => {
                const event_id = this.props.navigation.getParam('event_id');
                this.setState({ checked: 3 })
                QRcheckAPI(result.data, event_id, this.state.token, this.state.user_id)
                  .then(res => res.json())
                  .then(resJSON => {
                    this.setState({ time: resJSON.time, name: resJSON.name });
                    if (resJSON.message === 'Done.') {
                      this.setState({ checked: 1 })
                    }
                    else if (resJSON.message === 'Guest ID already checked.') {
                      this.setState({ checked: -1 })
                    }
                    else if (resJSON.message === 'No guest ID in database.') {
                      this.setState({ checked: 2 })
                    }
                  })
              }
            }
          >
            <View
              style={[styles.blur_screen1, { justifyContent: "center" }]}
              opacity={0.7}>
              <Text style={[styles.text, { color: "#fb3", fontWeight: "bold" }]}>Quét QR code trong ô vuông này</Text>
            </View>
            <View
              style={{ flex: 1 / 2, flexDirection: "row", justifyContent: "space-between" }}>
              <View style={styles.blur_screen2}
                opacity={0.7}></View>
              <View style={styles.blur_screen2}
                opacity={0.7}></View>
            </View>
            <View style={styles.blur_screen1}
              opacity={0.7}></View>
          </RNCamera>
        </View >
      );
    }
    else if (this.state.checked === 1) {
      return (
        <View style={styles.screen}>
          <View style={styles.screen_part}>
            <Text style={styles.text}>ĐÃ QUÉT</Text>
          </View>
          <View style={styles.screen_part}>
            <Text style={styles.noti_text}>Họ và Tên: {this.state.name}</Text>
            <Text style={styles.noti_text}>Quét vào lúc: {this.state.time}</Text>
          </View>
          <View style={styles.screen_part}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ checked: 0 })
              }}>
              <Text style={{ fontSize: 25 }}>QUÉT LẠI</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    else if (this.state.checked === -1) {
      return (
        <View style={styles.screen}>
          <View style={styles.screen_part}>
            <Text style={styles.text}>MÃ QR ĐÃ ĐƯỢC SỬ DỤNG</Text>
          </View>
          <View style={styles.screen_part}>

          </View>
          <View style={styles.screen_part}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ checked: 0 })
              }}>
              <Text style={{ fontSize: 25 }}>QUÉT LẠI</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    else if (this.state.checked === 2) {
      return (
        <View style={styles.screen}>
          <View style={styles.screen_part}>
            <Text style={styles.text}>KHÔNG CÓ MÃ QR</Text>
          </View>
          <View style={styles.screen_part}>

          </View>
          <View style={styles.screen_part}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ checked: 0 })
              }}>
              <Text style={{ fontSize: 25 }}>QUÉT LẠI</Text>
            </TouchableOpacity>
          </View>
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