import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './MenuCardStyle'

const MenuCard = ({ product, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.container}>
      <View style={styles.category}>
      <Image style={styles.image} source={{uri: product.strCategoryThumb}}></Image>
        <Text style={styles.title}>{product.strCategory}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
    )
}

export default MenuCard