import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
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
  block1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingVertical: 10,
    backgroundColor: "#f2dede",
  },
  block2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingVertical: 10,
    backgroundColor: "#def0d7",
  },
  header: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#fb3",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 8,
  },
})