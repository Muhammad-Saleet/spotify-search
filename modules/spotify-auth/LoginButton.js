import React from 'react'
import { Button } from 'react-native-elements'

export default function LoginButton ({ ...rest }) {
  return (
    <Button
      icon={{
        type: 'font-awesome',
        name: 'spotify',
        size: 15,
        color: 'white'
      }}
      title="Login with Spotify"
      {...rest}
    />
  )
}
