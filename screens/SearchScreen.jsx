import React from 'react'
import { Text, View, Button } from 'react-native'
import { ScreenContainer } from '../components/ScreenContainer'
import { AppContext } from '../constants/Context'

export function SearchScreen ({ navigation }) {
  const { logout } = React.useContext(AppContext)

  return (
    <ScreenContainer>
      <View>
        <Text>
          search screen
        </Text>
        <Button
          onPress={logout}
          title="logout here"
          color="#841584"
        />
        <Button
          onPress={() => navigation.push('ArtistScreen')}
          title="go to artist screen"
          color="#841584"
        />
      </View>
    </ScreenContainer>
  )
}
