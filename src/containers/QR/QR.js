import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
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
      checked: 0
    }
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
                QRcheckAPI(result.data, event_id)
                  .then(res => res.json())
                  .then(resJSON => {
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
              style={[styles.blur_screen1, {justifyContent: "center"}]}
              opacity={0.7}>
              <Text style= {[styles.text, {color: "#fb3", fontWeight: "bold"}]}>Quét QR code trong ô vuông này</Text>
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
        <View style={[styles.screen, { alignItems: "center" }]}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>ĐÃ QUÉT</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ checked: 0 })
            }}>
            {/* <AntDesign name = "circledowno" size = "70" color = "#fb3"></AntDesign> */}
            <Text>QUÉT LẠI</Text>
          </TouchableOpacity>
        </View>
      );
    }

    else if (this.state.checked === -1) {
      return (
        <View style={[styles.screen, { alignItems: "center" }]}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.text}>MÃ QR ĐÃ ĐƯỢC SỬ DỤNG</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ checked: 0 })
            }}>
            <Text>QUÉT LẠI</Text>
          </TouchableOpacity>
        </View>
      )
    }

    else if (this.state.checked === 2) {
      return (
        <View style={[styles.screen, { alignItems: "center" }]}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.text}>KHÔNG CÓ MÃ QR</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ checked: 0 })
            }}>
            <Text>QUÉT LẠI</Text>
          </TouchableOpacity>
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