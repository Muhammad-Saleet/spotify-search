import { Input } from 'react-native-elements'
import React from 'react'
import styles from '../../../styles'

export function CustomInput ({ style, errorStyle, ...rest }) {
  const mergedStyle = {
    ...styles.customInput.style,
    ...style
  }
  const mergedErrorStyle = {
    ...styles.customInput.errorStyle,
    ...errorStyle
  }
  return (
    <Input
      {...styles.customInput}
      style={mergedStyle}
      errorStyle={mergedErrorStyle}
      {...rest}
    />
  )
}
