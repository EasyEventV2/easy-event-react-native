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
import { SearchBar } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { loadEventsAPI, searchEventsAPI } from './../../services/apis'
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user_id: this.props.navigation.getParam('user_id'),
      // user_id: '5be57f58bc2b01d8bbaefe37',
      user_name: this.props.navigation.getParam('user_name'),
      event_id: null,
      latitude: [],
      longtitude: [],
      key_word: null,
      loadingFlatList: 0,
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
          this.state.latitude.push(resJSON[i].cord.lat)
          this.state.longtitude.push(resJSON[i].cord.long)
        }
        this.setState({ loading: 0 })
      })
  }

  onSearch() {

  }

  renderModalMap() {
    return (
      <View style={styles.map}>
        {(this.state.loadingFlatList === 0) ?
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
                latitude: this.state.latitude[this.state.choose],
                longitude: this.state.longtitude[this.state.choose],
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: this.state.latitude[this.state.choose],
                  longitude: this.state.longtitude[this.state.choose],
                }}
                title={this.state.data[this.state.choose].name}
              />
            </MapView>
          </Modal>
          :
          <View></View>
        }
      </View>

    )
  }

  renderModalEvent() {
    return (
      <View>
        {(this.state.loadingFlatList === 0) ?
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

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.setState({
                      modalEventVisible: !this.state.modalEventVisible,
                    });
                    this.props.navigation.navigate("Guest", {
                      event_id: this.state.event_id
                    })
                  }}>
                  <Text style={{ fontSize: 15 }}>DANH SÁCH KHÁCH</Text>
                </TouchableOpacity>

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
            </ScrollView>
          </Modal>
          :
          <View></View>
        }

      </View>
    )
  }

  render() {
    if (this.state.loading === 0) {
      return (
        <View style={styles.screen}>
          <View>
            <View style={styles.header}>
              <Text style={styles.header_text}>
                SỰ KIỆN
              </Text>
              <Text style={styles.user_text}>
                {this.state.user_name}
              </Text>
            </View>
            <View style={styles.searcher}>
              <TextInput
                style={styles.search_bar}
                onChangeText={
                  (key_word) => {
                    this.setState({ key_word: key_word })
                  }
                }
                placeholder='Tìm kiếm'
              />
              <TouchableOpacity
                style={styles.button}
                onPress={
                  () => {
                    this.setState({ loadingFlatList: 1 })
                    searchEventsAPI(this.state.user_id, this.state.key_word)
                      .then(res => res.json())
                      .then(resJSON => {
                        if (resJSON.message === 'OK') {
                          this.setState({ data: [] });
                          for (var i = 0; i < resJSON.result.length; i++) {
                            this.state.data.push(resJSON.result[i])
                          }
                        }
                        else {
                          this.setState({ data: [] });
                        }
                      })
                      .then(() => {
                        if (this.state.data.length === 0) {
                          this.setState({ loadingFlatList: -1 })
                        }
                        else {
                          this.setState({ loadingFlatList: 0 })
                        }
                      })
                  }
                }>
                <Text>Tìm kiếm</Text>
              </TouchableOpacity>
            </View>
          </View>

          {this.renderModalEvent()}

          {(this.state.loadingFlatList === 0) ?
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
                      this.setState({ event_id: item._id})
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
            : (this.state.loadingFlatList === -1) ?
              <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <Text style={styles.header_text}>Không có sự kiện nào trùng khớp</Text>
              </View>
              :
              <View style={styles.screen}>
                <ActivityIndicator size="large" color="#fb3" />
              </View>
          }

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
