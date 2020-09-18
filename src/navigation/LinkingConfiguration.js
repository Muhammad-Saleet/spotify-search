import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      LoginScreen: 'login',
      SearchScreen: 'search',
      ArtistScreen: 'artist',
      NotFound: '*'
    }
  }
}
