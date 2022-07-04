import { Image,  Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import styles from './MealsStyle'

const MealDetail = ({ detail, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image style={styles.image} source={{uri: detail.strMealThumb}}></Image>
        </View>
        <View style={styles.oppacity}>
    <Text style={styles.text} numberOfLines={1}>{detail.strMeal}</Text>

        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default MealDetail