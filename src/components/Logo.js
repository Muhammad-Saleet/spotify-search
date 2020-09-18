import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements'
import styles from '../../styles'

export default function Logo () {
  return (
    <View {...styles.logoContainer}>
      <Image
        {...styles.logo}
        source={require('../../assets/logo-1.png')}
      />
    </View>
  )
}
