import { Button } from 'react-native-elements'
import React from 'react'
import styles from '../../../styles'

export function IconButton ({ buttonStyle, titleStyle, iconContainerStyle, ...rest }) {
  const mergedButtonStyle = {
    ...styles.iconButton.buttonStyle,
    ...buttonStyle
  }
  const mergedTitleStyle = {
    ...styles.iconButton.titleStyle,
    ...titleStyle
  }
  const mergedIconContainerStyle = {
    ...styles.iconButton.iconContainerStyle,
    ...iconContainerStyle
  }
  return (
    <Button
      {...styles.iconButton}
      buttonStyle={mergedButtonStyle}
      titleStyle={mergedTitleStyle}
      iconContainerStyle={mergedIconContainerStyle}
      {...rest}
    />
  )
}
