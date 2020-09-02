import React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenContainer } from '../components/ScreenContainer'
import { AppContext } from '../constants/Context'

export function ArtistScreen ({ navigation }) {
  const { logout } = React.useContext(AppContext)

  return (
    <ScreenContainer>
      <View>
        <Text>
          artist screen
        </Text>
        <Button
          onPress={logout}
          title="logout here"
          color="#841584"
        />
      </View>
    </ScreenContainer>
  )
}
