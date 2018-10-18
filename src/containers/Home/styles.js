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
    height: Dimensions.get('window').height * 0.55,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
  },
  block_text: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  block_footer: {
    height: "40%",
    backgroundColor: '#cccccccc',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  header: {
    height: Dimensions.get('window').height * 0.15,
    justifyContent: "center",
  },
  header_text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  }
})