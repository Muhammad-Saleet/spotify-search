import React, { useState } from 'react'
import AuthServices from './AuthServices'
import LoginView from './LoginView'

export default function LoginComponent ({
  navigateToPasswordReset,
  navigateToRegister,
  onSuccess,
  onFailure
}) {
  const [isLoading, setIsLoading] = useState(false)

  async function loginWithEmail (credentials) {
    setIsLoading(true)
    const response = await AuthServices.login(credentials)
    setIsLoading(false)

    if (response.accessToken) {
      onSuccess({
        provider: 'email',
        accessToken: response.accessToken
      })
    } else {
      onFailure({
        error: response.error
      })
    }
  }

  return (
    <LoginView
      navigateToPasswordReset={navigateToPasswordReset}
      navigateToRegister={navigateToRegister}
      loginWithEmail={loginWithEmail}
      loading={isLoading}/>
  )
}
