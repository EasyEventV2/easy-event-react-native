import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    Screen: {
        justifyContent: 'center',
        flex: 1,
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: "column",
        height: 100,
        margin: 5,
        marginVertical: 10,
        backgroundColor: '#ced6e2',
    },
    GridViewInsideTextItemStyle: {
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
    },
    topBar: {
        flex: 1 / 7, 
        backgroundColor: "#ced6e2",
    }
})