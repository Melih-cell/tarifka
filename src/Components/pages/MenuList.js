import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import customHook from '../hooks/handleHook'
import MenuCard from './MenuCard/MenuCard'
import config from '../../../config'

const MenuList = ({ navigation }) => {
    const { data, loading, error } = customHook(config.API_CATEGORI)

   const handleMeals = (strCategory) => {
      navigation.navigate('Meals', {strCategory})
   }

  const handleSelect = ({ item }) => {
    return <MenuCard product={item} onSelect={() => handleMeals(item.strCategory)}/>
  }

  return (
    <View>
      <FlatList data={data.categories} renderItem={handleSelect}></FlatList>

    </View>
  )
}

export default MenuList 