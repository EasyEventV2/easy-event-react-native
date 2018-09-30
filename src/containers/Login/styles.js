import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "blue",
    },
    container_text: {
        alignItems: "center"
    },
    modal: {
        width: "100%",
        height: "50%",
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
    },
    modalLogin: {
        padding: 5,
    },
    button: {
        padding: 10,
        backgroundColor: "pink",
        flex: 1/2,
        alignItems: "center",
        marginHorizontal: 5,
        borderRadius: 8,
    },
    button_container: {
        flexDirection: "row",
        padding: 5,
    }
})