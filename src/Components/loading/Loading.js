import { Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native'

const Loading = () => {
  return (
    <Lottie source={require('../assets/rocket.json')} autoPlay/>
    )
}

export default Loading