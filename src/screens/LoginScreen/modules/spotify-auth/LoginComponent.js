import React, { useState } from 'react'
import AuthServices from './AuthServices'
import LoginView from './LoginView'
import config from '../../../../../config'

export default function LoginComponent ({
  onSuccess,
  onFailure
}) {
  const [isLoading, setIsLoading] = useState(false)

  async function login () {
    setIsLoading(true)
    const response = await AuthServices.login(
      config.spotifyCredentials.clientId,
      config.spotifyCredentials.redirectUri,
      config.spotifyCredentials.scopes
    )
    setIsLoading(false)

    if (response.accessToken) {
      onSuccess({
        provider: 'spotify',
        accessToken: response.accessToken
      })
    } else {
      onFailure({
        error: response.error
      })
    }
  }

  return (
    <LoginView onPress={login} loading={isLoading}/>
  )
}
