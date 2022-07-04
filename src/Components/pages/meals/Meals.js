import { FlatList, View } from 'react-native'
import React from 'react'
import customHook from '../../hooks/handleHook'
import config from '../../../../config'
import MealDetail from './MealDetail'
import Detail from '../detail/Detail'
import Loading from '../../loading/Loading'
import error from '../../error/error'

const Meals = ({ route, navigation }) => {
    const { strCategory } = route.params;
    const { data, loading } = customHook(`${config.API_FOODS}${strCategory}`)
    
    console.log("strCategory: ", strCategory)
    console.log("data: ", data)
    
    const handleSelect = (idMeal) => {
        navigation.navigate('Detail', {idMeal} )
    }
    
    const handelRender = ({ item }) => <MealDetail detail={item} onSelect={() => handleSelect(item.idMeal)}/>

    return (
    <View>
        <FlatList data={data.meals} renderItem={handelRender} ></FlatList>
    </View>
  )
}

export default Meals