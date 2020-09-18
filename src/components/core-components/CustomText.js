import React from 'react'
import { Text } from 'react-native'
import styles from '../../../styles'

export function CustomText ({ style, ...rest }) {
  const mergedStyle = {
    ...styles.customText.style,
    ...style
  }
  return (
    <Text
      {...styles.customText}
      style={mergedStyle}
      {...rest}
    />
  )
}
