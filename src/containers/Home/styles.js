import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#00BCD4',
        borderWidth: 1
    },
    GridViewInsideTextItemStyle: {
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
    },
    subbutton: {
        marginTop: 10,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#00BCD4',
        borderRadius: 10,                        //button with curves
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: "center",
        flex: 1 / 2,
    },
    button: {
        flexDirection: "row",
        flex: 1 / 3,
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "gray"
    },
    button2: {
        flexDirection: "row",
        flex: 1 / 2,
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "gray"
    },
})