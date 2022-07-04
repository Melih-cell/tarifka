import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
      image: {
        width: Dimensions.get('window'). width,
        height: 400
      },
      text_container: {
        margin: 10,
      },
      strMeal: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#bd1604'
      },
      strArea: {
        fontSize: 25,
      },
      separator: {
        borderBottomWidth: 1,
        borderColor: '#a6a6a6',
        marginTop: 10,
        marginBottom: 10,
      },
      button: {
        borderWidth: 1,
        borderColor: 'red',
        width: Dimensions.get('window').width - 10,
        height: 40,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        marginBottom: 20
    },
    youtube_button: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }

    })