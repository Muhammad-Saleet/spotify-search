import React, { useState } from 'react'
import AuthServices from './AuthServices'
import LoginButton from './LoginButton'

export function LoginComponent ({
  clientId,
  redirectUri,
  scopes,
  onSuccess,
  onFailure
}) {
  const [isLoading, setIsLoading] = useState(false)

  async function login () {
    setIsLoading(true)
    const response = await AuthServices.login(
      clientId,
      redirectUri,
      scopes
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
    <LoginButton onPress={login} loading={isLoading}/>
  )
}
