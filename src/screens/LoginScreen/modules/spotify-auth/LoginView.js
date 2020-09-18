import React from 'react'
import { IconButton } from '../../../../components/core-components/IconButton'
import i18n from 'i18n-js'

export default function LoginView ({ ...rest }) {
  return (
    <IconButton
      icon={{
        type: 'font-awesome',
        name: 'spotify',
        size: 20,
        color: '#1DB954'
      }}
      title={i18n.t('loginWithSpotify')}
      {...rest}
    />
  )
}
