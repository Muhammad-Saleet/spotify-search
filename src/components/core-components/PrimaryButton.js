import { Button } from 'react-native-elements'
import React from 'react'
import styles from '../../../styles'

export function PrimaryButton ({ buttonStyle, titleStyle, ...rest }) {
  const mergedButtonStyle = {
    ...styles.primaryButton.buttonStyle,
    ...buttonStyle
  }
  const mergedTitleStyle = {
    ...styles.primaryButton.titleStyle,
    ...titleStyle
  }
  return (
    <Button
      {...styles.primaryButton}
      buttonStyle={mergedButtonStyle}
      titleStyle={mergedTitleStyle}
      {...rest}
    />
  )
}
