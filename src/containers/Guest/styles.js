import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 15,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingVertical: 10
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
  },
})