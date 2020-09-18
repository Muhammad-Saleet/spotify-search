import { Button } from 'react-native-elements'
import React from 'react'
import styles from '../../../styles'

export function LinkButton ({ titleStyle, ...rest }) {
  const mergedTitleStyle = {
    ...styles.linkButton.titleStyle,
    ...titleStyle
  }
  return (
    <Button
      {...styles.linkButton}
      titleStyle={mergedTitleStyle}
      {...rest}
    />
  )
}
