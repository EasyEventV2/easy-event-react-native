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
  ImageBackground,
  Modal,
  ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { loadEventsAPI } from './../../services/apis'
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user_id: this.props.navigation.getParam('user_id'),
      user_name: this.props.navigation.getParam('user_name'),
      loading: 1,
      modalMapVisible: false,
      modalEventVisible: false,
      choose: 0,
    }
  }

  componentWillMount() {
    loadEventsAPI(this.state.user_id)
      .then(res => res.json())
      .then(resJSON => {
        for (var i = 0; i < resJSON.length; i++) {
          this.state.data.push(resJSON[i])
        }
        this.setState({ loading: 0 })
      })
  }

  renderModalMap() {
    return (
      <View style={styles.map}>
        <Modal
          ref="modalMap"
          animationType="fade"
          transparent={false}
          visible={this.state.modalMapVisible}
          onRequestClose={() => {
            this.setState({ modalMapVisible: !this.state.modalMapVisible });
          }}>
          <MapView
            style={styles.map}
            region={{
              latitude: this.state.data[this.state.choose].cord.lat,
              longitude: this.state.data[this.state.choose].cord.long,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: this.state.data[this.state.choose].cord.lat,
                longitude: this.state.data[this.state.choose].cord.long,
              }}
              title={this.state.data[this.state.choose].name}
            />
          </MapView>
        </Modal>
      </View>

    )
  }

  renderModalEvent() {
    return (
      <View>
        <Modal
          ref="modalEvent"
          animationType="slide"
          transparent={false}
          visible={this.state.modalEventVisible}
          onRequestClose={() => {
            this.setState({
              modalEventVisible: !this.state.modalEventVisible,
            });
          }}>

          {this.renderModalMap()}

          <ScrollView
            scrollEnabled={true}
            style={styles.modalScroll}>
            <View style={styles.modalBackground}>
              <Image
                source={{ uri: this.state.data[this.state.choose].dataURI }}
                style={styles.imageBackgroundModal}>
                {/* <TouchableOpacity
                    style={{ height: 60, alignItems: 'flex-end', padding: 10 }}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Icon name='ios-close-circle' size={40} color='#ddddddaa' />
                  </TouchableOpacity> */}
              </Image>
            </View>
            <View style={{ padding: 10 }}>
              <Text style={[styles.header_text, { marginBottom: 10, textAlign: "left" }]}>
                {this.state.data[this.state.choose].name}
              </Text>

              <Text style={styles.header2_text}>
                Thời gian:
                </Text>
              <Text style={styles.paragraph_text}>
                {this.state.data[this.state.choose].time.begin_date} đến {this.state.data[this.state.choose].time.end_date} ({this.state.data[this.state.choose].time.begin_time} - {this.state.data[this.state.choose].time.end_time})
                </Text>

              <Text style={styles.header2_text}>
                Nhà tổ chức:
                </Text>
              <Text style={styles.paragraph_text}>
                {this.state.data[this.state.choose].organizer}
              </Text>

              <Text style={styles.header2_text}>
                Địa điểm: {this.state.data[this.state.choose].place}
              </Text>
              <Text style={styles.paragraph_text}>
                {this.state.data[this.state.choose].address}
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({
                    modalMapVisible: !this.state.modalMapVisible,
                  });
                }}>
                <Text style={{ fontSize: 15 }}>XEM BẢN ĐỒ</Text>
              </TouchableOpacity>

              <Text style={styles.header2_text}>
                Giới thiệu:
                </Text>
              <Text style={styles.paragraph_text}>
                {this.state.data[this.state.choose].description}
              </Text>
            </View>


            {/* {(this.props.item.hasVideo == 'yes') ?
                <View style={{ height: 300, padding: 20 }}>
                  <WebView
                    style={{ flex: 1 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: this.props.item.videoURI }}
                  />
                </View>
                :
                <View></View>
              } */}

            {/* <Text style={styles.content}>
                {this.props.item.content}
              </Text> */}
          </ScrollView>
        </Modal>
      </View>
    )
  }

  render() {
    if (this.state.loading === 0) {
      return (
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.header_text}>
              SỰ KIỆN
            </Text>
            <Text style={styles.user_text}>
              {this.state.user_name}
            </Text>
          </View>

          {this.renderModalEvent()}

          <FlatList
            style={styles.list}
            data={this.state.data}
            extraData={this.state.data}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) =>
              <View style={styles.block_list}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ choose: this.state.data.indexOf(item) })
                    this.setState({ modalEventVisible: !this.state.modalEventVisible });
                  }}
                >
                  <ImageBackground
                    source={{ uri: item.dataURI }}
                    style={styles.imageBackground}>
                    <View style={styles.block_footer}>
                      <View style={{ flex: 1 / 2, justifyContent: "center" }}>
                        <Text style={[styles.block_text, { fontSize: 15, fontWeight: "bold" }]}>
                          {item.name}
                        </Text>
                      </View>
                      <View style={{ flex: 1 / 2, justifyContent: "flex-start" }}>
                        <TouchableOpacity
                          style={styles.check_in_button}
                          onPress={() => {
                            this.props.navigation.navigate("QR", {
                              event_id: item._id
                            })
                          }}>
                          <Text style={styles.block_text}>
                            CHECK-IN
                        </Text>
                        </TouchableOpacity>
                      </View>
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
