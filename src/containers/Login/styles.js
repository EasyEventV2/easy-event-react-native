import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container_img: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1 / 3,
  },
  head_image: {
    width: 200,
    height: 128,
  },
  text: {
    fontSize: 15,
    color: "black",
  },
  form: {
    width: "90%",
    padding: 5,
    flex: 1 / 3,
  },
  form_input: {
    flex: 1 / 2, 
    justifyContent: "flex-end",
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