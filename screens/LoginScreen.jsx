import React from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import { LoginComponent } from '../modules/spotify-auth/LoginComponent'
import Layout from '../constants/Layout'
import { AppContext } from '../constants/Context'
// todo: all constants should live in one big config file
import { SpotifyCredentials } from '../constants/Secrets'

export function LoginScreen ({ navigation }) {
  const { login } = React.useContext(AppContext)

  return (
    <ScreenContainer>
      <View style={styles.spotifyButtonContainer}>
        <LoginComponent
          clientId={SpotifyCredentials.clientId}
          redirectUri={SpotifyCredentials.redirectUri}
          scopes={SpotifyCredentials.scopes}
          onSuccess={({ accessToken }) => {
            // todo: make login work whatever the provider returns (access_token, refresh_token, ..)
            login(accessToken)
          }}
          onFailure = {({ error }) => console.log(error)}
        />
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  spotifyButtonContainer: {
    marginTop: Math.round(Layout.window.height / 5),
    marginHorizontal: 25
  }
})
