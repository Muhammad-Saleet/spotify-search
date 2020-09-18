import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppContext } from './src/constants/Context'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import en from './localisation/en'

import RootNavigator from './src/navigation/RootNavigator'
import { AppLoading } from 'expo'

export default function App () {
  const [token, setToken] = useState('')
  const [fontsLoaded] = useFonts({
    Inter_400Regular
  })

  i18n.locale = Localization.locale
  i18n.fallbacks = true

  i18n.translations = {
    en: en
  }

  async function login (token) {
    try {
      setToken(token)
    } catch (error) {
      console.log(error)
    }
  }

  async function logout () {
    try {
      setToken('')
    } catch (error) {
      console.log(error)
    }
  }

  const config = {
    auth: {
      google: false,
      spotify: true
    }
  }

  const appContext = {
    config,
    token,
    setToken,
    login,
    logout
  }

  if (!fontsLoaded) return <AppLoading/>

  return (
    <AppContext.Provider value={appContext}>
      <SafeAreaProvider>
        <RootNavigator token={token}/>
        <StatusBar />
      </SafeAreaProvider>
    </AppContext.Provider>

  )
}
