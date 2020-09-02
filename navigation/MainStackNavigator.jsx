import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchScreen } from '../screens/SearchScreen'
import { ArtistScreen } from '../screens/ArtistScreen'

const MainStack = createStackNavigator()
export default function MainStackNavigator () {
  return (
    <MainStack.Navigator
      initialRouteName='SearchScreen'
      screenOptions={{
        headerTintColor: '#2f2f2f'
      }}
    >
      <MainStack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <MainStack.Screen
        name='ArtistScreen'
        component={ArtistScreen}
        options={{ title: 'Artist' }}
      />
    </MainStack.Navigator>
  )
}
