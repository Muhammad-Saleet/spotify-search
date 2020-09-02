import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppContext } from './constants/Context'

import Navigation from './navigation/Navigation'

export default function App () {
  const [token, setToken] = useState('')

  /*
  useEffect(() => {
    const loadAppState = async () => {
      await deviceStorage.loadToken(setToken)
    }
    loadAppState()
  }, [])
  */

  async function login () {
    try {
      setToken('fakeToken')
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

  return (
    <AppContext.Provider value={appContext}>
      <SafeAreaProvider>
        <Navigation token={token}/>
        <StatusBar />
      </SafeAreaProvider>
    </AppContext.Provider>

  )
}
