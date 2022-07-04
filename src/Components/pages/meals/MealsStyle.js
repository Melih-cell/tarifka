import { Dimensions, StyleSheet } from "react-native"

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#ffa719'
    },
    image: {
        width: deviceSize.width / 1.1,
        height: Dimensions.get('window').height / 4,
        borderRadius: 15,
        marginBottom: 15
    },
    image_container: {
        alignItems: 'center'
    },
    text: {
        position: 'absolute',
        color: '#fffbf5',
        fontSize: 30,
        fontWeight: 'bold',
        right: 10,
        zIndex: 0
    },
    oppacity: {
        justifyContent: 'center',
        backgroundColor: '#000000',
        width: Dimensions.get('window').width / 1.1,
        position: 'absolute',
        height: 65,
        opacity: 0.6,
        bottom: 15,
        right: 27,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        zIndex: 1
    }
})