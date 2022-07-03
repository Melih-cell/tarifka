import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import Config from '../../../config'
import ProductCard from '../../components/ProductCard/ProductCard';
import fetchHooks from '../../hooks/fetchHooks';

const Product = () => {
  
  const { data, loading, error} = fetchHooks(Config.API_URL);

 

  function renderProduct({item}) {
    return <ProductCard product={item}/>
  }

  if(loading) {
    return  <ActivityIndicator size="large"/>
  }

  if(error) {
    return <Text>{error}</Text>
  }
  
  return (
    <View>
      <FlatList data={data} renderItem={renderProduct}></FlatList>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})