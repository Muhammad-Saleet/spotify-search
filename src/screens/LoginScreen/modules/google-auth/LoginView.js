import React from 'react'
import { IconButton } from '../../../../components/core-components/IconButton'
import i18n from 'i18n-js'

export default function LoginView ({ ...rest }) {
  return (
    <IconButton
      icon={{
        type: 'font-awesome',
        name: 'google',
        size: 20,
        color: '#DB4437'
      }}
      title={i18n.t('loginWithGoogle')}
      {...rest}
    />
  )
}
