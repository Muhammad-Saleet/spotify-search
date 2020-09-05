import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppContext } from './constants/Context'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'

import RootNavigator from './navigation/RootNavigator'
import { AppLoading } from 'expo'

export default function App () {
  const [token, setToken] = useState('')
  const [fontsLoaded] = useFonts({
    Inter_400Regular
  })

  /*
  useEffect(() => {
    const loadAppState = async () => {
      await deviceStorage.loadToken(setToken)
    }
    loadAppState()
  }, [])
  */

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

  const appContext = {
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
