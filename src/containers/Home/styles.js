import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  screen: {
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    flex: 1
  },
  map: { 
    position: "absolute", 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0 
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
  header2_text: { 
    fontSize: 24, 
    fontWeight: "bold",
  },
  paragraph_text: { 
    fontSize: 15, 
    marginBottom: 10 
  },
  check_in_button: {
    borderRadius: 5,
    padding: 5,
    width: "40%",
    backgroundColor: "#fb3",
    alignItems: "center",
    alignSelf: "flex-end",
    elevation: 10,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#fb3",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 8,
  },
  modalScroll: {
    
  },
  modalBackground: {
    height: Dimensions.get('window').height * 0.35,
  },
  imageBackgroundModal: {
    width: '100%',
    height: '100%',
  },
})