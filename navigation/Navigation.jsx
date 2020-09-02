import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import AuthStackNavigator from './AuthStackNavigator'
import MainStackNavigator from './MainStackNavigator'

export default function Navigation ({ token }) {
  return (
    <NavigationContainer>
      <RootStackNavigator token={token}/>
    </NavigationContainer>
  )
}

const RootStack = createStackNavigator()
function RootStackNavigator ({ token }) {
  if (!token) {
    return (
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen
          name='Auth'
          component={AuthStackNavigator}
          options={{
            animationEnabled: false
          }}
        />
      </RootStack.Navigator>
    )
  } else {
    return (
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen
          name='Main'
          component={MainStackNavigator}
          options={{
            animationEnabled: false
          }}
        />
      </RootStack.Navigator>
    )
  }
}
