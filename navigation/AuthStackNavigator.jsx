import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from '../screens/LoginScreen'

const AuthStack = createStackNavigator()
export default function AuthStackNavigator () {
  return (
    <AuthStack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerTintColor: '#2f2f2f'
      }}
    >
      <AuthStack.Screen
        name='Login'
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
    </AuthStack.Navigator>
  )
}
