import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container_text: {
        alignItems: "center"
    },
    modal: {
        width: "100%",
        height: "30%",
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold"
    },
    modalLogin: {
        paddingVertical: 5,
    },
    button: {
        padding: 10,
        backgroundColor: "pink",
        flex: 1/2,
        alignItems: "center",
        marginHorizontal: 5,
    },
    button_container: {
        flexDirection: "row",
        paddingHorizontal: 5,
    }
})