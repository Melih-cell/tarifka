import { Dimensions, Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './DetailStyle'
import { TouchableOpacity } from 'react-native'

const IdMealCard = ({ handleSelect }) => {
    console.log("props: ", handleSelect.strMealThumb)
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: handleSelect.strMealThumb}}></Image>
    <View style={styles.text_container}>
      <Text style={styles.strMeal} >{handleSelect.strMeal}</Text>
      <Text style={[styles.strMeal, styles.strArea]} >{handleSelect.strArea}</Text>
      <View style={styles.separator}></View>
      <Text style={styles.strInstructions} >{handleSelect.strInstructions}</Text>
    </View>
    <TouchableOpacity onPress={() => Linking.openURL(handleSelect.strYoutube)} style={styles.button}>
      <Text style={styles.youtube_button}>Watch On YouTube</Text>
    </TouchableOpacity>
    </View> 
  )
}

export default IdMealCard
