import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
  container_text: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1 / 3,
  },
  head: {
    fontSize: 25,
    fontFamily: "VincHand",
  },
  text: {
    fontSize: 15,
    color: "black",
  },
  form: {
    width: "90%",
    padding: 5,
    flex: 1 / 3,
    justifyContent: "center",
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#fb3",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 8,
  },
  button_container: {
    justifyContent: "center",
    flex: 1 / 3,
  }
})