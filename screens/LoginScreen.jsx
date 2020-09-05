import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { ScreenContainer } from '../components/ScreenContainer'
import { AppContext } from '../constants/Context'
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session'
import { SpotifyCredentials } from '../constants/Secrets'
import { FontAwesome } from '@expo/vector-icons'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts';

export function LoginScreen ({ navigation }) {
  const { login } = React.useContext(AppContext)

  // Endpoint
  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token'
  }

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: SpotifyCredentials.clientId,
      scopes: ['user-read-email'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: SpotifyCredentials.redirectUri
      })
    },
    discovery
  )

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params
      login(access_token)
      // await deviceStorage.addToken(response.data.token, setToken)
    }
  }, [response])

  return (
    <ScreenContainer>
      <View>
        <Button
          onPress={() => login('fakeToken')}
          title="fake login"
          color="#841584"
        />
        <View style={styles.spotifyButtonContainer}>
          <FontAwesome.Button
            name="spotify"
            backgroundColor={Colors.white}
            size={40}
            style={styles.spotifyButton}
            iconStyle={styles.icon}
            onPress={() => {
              promptAsync()
            }}>
            <Text style={styles.text}>
              Login with Spotify
            </Text>
          </FontAwesome.Button>
        </View>
      </View>

    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: Colors.spotifyGreen
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.regular
  },
  spotifyButtonContainer: {
    marginTop: Math.round(Layout.window.height / 5),
    marginHorizontal: 25
  },
  spotifyButton: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    justifyContent: 'center'
  }
})
