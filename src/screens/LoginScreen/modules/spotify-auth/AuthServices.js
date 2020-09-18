import { loadAsync, makeRedirectUri } from 'expo-auth-session'

export default {
  async login (clientId, redirectUri, scopes) {
    console.log('logging in with spotify')
    const discovery = {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token'
    }

    const config = {
      responseType: 'token',
      clientId: clientId,
      scopes: scopes,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
      // For usage in bare and standalone
        native: redirectUri
      })
    }

    console.log(config)

    const authRequest = await loadAsync(config, discovery)

    // attempt login
    try {
      const response = await authRequest.promptAsync(discovery)

      if (response.type === 'success') {
        const { access_token } = response.params
        return { accessToken: access_token }
      } else {
        return { error: 'login interrupted' }
      }
    } catch (e) {
      return { error: `spotify login failed: ${e}` }
    }
  }
}
