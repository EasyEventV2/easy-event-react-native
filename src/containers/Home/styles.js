import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  screen: {
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    flex: 1
  },
  block_list: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: "column",
    height: Dimensions.get('window').height * 0.35,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#ddd',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
  },
  block_text: {
    fontSize: 12,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  block_footer: {
    height: "35%",
    backgroundColor: '#cccccccc',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  header: {
    height: Dimensions.get('window').height * 0.15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  header_text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  check_in_button: {
    borderRadius: 5,
    padding: 5,
    width: "40%",
    backgroundColor: "#fb3",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  modalScroll: {

  },
  modalBackground: {
    height: Dimensions.get('window').height * 0.8,
  },
  imageBackgroundModal: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
})