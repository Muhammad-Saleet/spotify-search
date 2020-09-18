import { ScrollView } from 'react-native'
import React from 'react'
import styles from '../../../styles'

export default function ScreenContainer ({ style, contentContainerStyle, ...rest }) {
  const mergedStyle = {
    ...styles.screenContainer.style,
    ...style
  }
  const mergedContentContainerStyle = {
    ...styles.screenContainer.contentContainerStyle,
    ...style
  }
  return (
    <ScrollView
      {...styles.screenContainer}
      style={mergedStyle}
      contentContainerStyle={mergedContentContainerStyle}
      {...rest}
    />
  )
}
