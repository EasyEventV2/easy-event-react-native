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
  Modal,
  ScrollView,
} from 'react-native';
import { loadEventsAPI } from './../../services/apis'
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: 1,
      modalVisible: false,
      choose: 0,
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentWillMount() {
    loadEventsAPI()
      .then(res => res.json())
      .then(resJSON => {
        for (var i = 0; i < resJSON.length; i++) {
          this.state.data.push(resJSON[i])
        }
        this.setState({ loading: 0 })
      })
  }

  renderModal() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <ScrollView style={styles.modalScroll}>
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
              <View style={styles.footer}
                blurRadius={50}>
                <Text style={styles.description}>
                  {this.state.data[this.state.choose].description}
                </Text>
                {/* <Text style={styles.tag}>
                      {this.props.item.tag}
                    </Text> */}
              </View>
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
            <Text style = {{textAlign: "center",}}>
              {this.state.data[0].organizer}
            </Text>
          </View>

          {this.renderModal()}

          <FlatList
            style={styles.list}
            data={this.state.data}
            extraData={this.state.data}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) =>
              <View style={styles.block_list}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ choose: this.state.data.indexOf(item) })
                    this.setModalVisible(true);
                  }}
                >
                  <ImageBackground
                    source={{ uri: item.dataURI }}
                    style={styles.imageBackground}>


                  {/* <View style={styles.imageBackground}> */}
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
                              eventname: item.name
                            })
                          }}>
                          <Text style={styles.block_text}>
                            CHECK-IN
                        </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  {/* </View> */}



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
