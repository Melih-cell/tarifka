import { FlatList, View } from 'react-native'
import React from 'react'
import handleHook from '../../hooks/handleHook'
import config from '../../../../config'
import IdMealCard from './IdMealCard'

const Detail = (props) => {
    const { idMeal } = props.route.params;
    const { data } = handleHook(`${config.FOOD_DETAIL}${idMeal}`);

    const mealCard = ({ item }) => <IdMealCard handleSelect={item}/>

  return (
    <View>
        <FlatList data={data.meals} renderItem={mealCard}></FlatList>
    </View>
  )
}

export default Detail