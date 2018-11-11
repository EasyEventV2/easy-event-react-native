import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  screen_part: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    flex: 1 / 3,
  },
  blur_screen1: {
    flex: 1 / 4,
    backgroundColor: "black",
    padding: 10,
  },
  blur_screen2: {
    flex: 1 / 10,
    backgroundColor: "black",
  },
  camera_screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#fb3",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 8,
  },
  noti_text: {
    fontSize: 16,
    fontStyle: "italic",
    color: "black",
    paddingVertical: 10,
    // textAlign: "center",
  },
  text: {
    fontSize: 35,
    color: "black",
    textAlign: "center",
  },
})