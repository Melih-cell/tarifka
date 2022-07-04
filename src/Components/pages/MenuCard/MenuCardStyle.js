import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#b0b0b0',
        flex: 1
    },
    category: {
        margin: 10,
        borderWidth: 1,
        borderColor: null,
        // padding: 30,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row',
        backgroundColor: '#766dcf'

    },
    image: {
        minHeight: 100,
        minWidth: 100,
        resizeMode: 'contain',
        borderRadius: 50,
        marginLeft: 5
    },
    title: {
        flex:1,
        marginHorizontal: 20,
        marginVertical: 30,
        color: 'white'
    }

})