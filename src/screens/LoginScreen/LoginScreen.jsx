import React from 'react'
import { View } from 'react-native'
import ScreenContainer from '../../components/core-components/ScreenContainer'
import { AppContext } from '../../constants/Context'
import ModuleIndex from './ModuleIndex'
import config from '../../../config/'
import Logo from '../../components/Logo'

export function LoginScreen ({ navigation }) {
  const { login } = React.useContext(AppContext)

  function renderEmailLogin () {
    const EmailLoginComponent = ModuleIndex.EmailLoginComponent
    return (
      <EmailLoginComponent
        navigateToPasswordReset={() => null}
        navigateToRegister={() => null}
        onSuccess={({ accessToken }) => {
          login(accessToken)
        }}
        onFailure = {({ error }) => console.log(error)}
      />
    )
  }

  function renderGoogleLogin () {
    const GoogleLoginComponent = ModuleIndex.GoogleLoginComponent
    return (
      <GoogleLoginComponent
        onSuccess={({ accessToken }) => {
          login(accessToken)
        }}
        onFailure = {({ error }) => console.log(error)}
      />
    )
  }

  function renderSpotifyLogin () {
    const SpotifyLoginComponent = ModuleIndex.SpotifyLoginComponent
    return (
      <SpotifyLoginComponent
        onSuccess={({ accessToken }) => {
          login(accessToken)
        }}
        onFailure = {({ error }) => console.log(error)}
      />
    )
  }

  function renderSocialLogins () {
    return (
      <View style={{ marginTop: 10 }}>
        <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
          {config.features.googleLogin && renderGoogleLogin()}
        </View>
        <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
          {config.features.spotifyLogin && renderSpotifyLogin()}
        </View>
      </View>
    )
  }

  return (
    <ScreenContainer>
      <Logo/>
      {config.features.emailLogin && renderEmailLogin()}
      {config.features.socialLogins && renderSocialLogins()}
    </ScreenContainer>
  )
}
