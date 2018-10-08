import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container_text: {
        alignItems: "center",
        flex: 1 / 3,
    },
    modal: {
        width: "100%",
        height: "80%",
        justifyContent: "center",
        padding: 5,
    },
    head: {
        fontSize: 25,
        fontWeight: "bold",
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
    modalLogin: {
        padding: 5,
        flex: 1 / 3,
        justifyContent: "center",
    },
    button: {
        padding: 10,
        margin: 5,
        backgroundColor: "#5e9cf9",
        alignItems: "center",
        marginHorizontal: 5,
        borderRadius: 8,
    },
    button_container: {
        justifyContent: "center",
        flex: 1 / 3,
        marginTop: 15,
    }
})