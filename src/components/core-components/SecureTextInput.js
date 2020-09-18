import React, { useState } from 'react'
import { CustomInput } from './CustomInput'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export function SecureTextInput ({ iconSize, iconColor, ...rest }) {
  const [visibilityIcon, setVisibilityIcon] = useState('visibility')
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const handlePasswordVisibility = () => {
    setVisibilityIcon((prevState) => (prevState === 'visibility' ? 'visibility-off' : 'visibility'))
    setSecureTextEntry((prevState) => !prevState)
  }
  return (
    <CustomInput
      secureTextEntry={secureTextEntry}
      rightIcon={(
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialIcons name={visibilityIcon} size={iconSize} color={iconColor} />
        </TouchableOpacity>
      )}
      {...rest}
    />
  )
}
