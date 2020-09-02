import React from 'react'
import { Text, View, Button } from 'react-native'
import { ScreenContainer } from '../components/ScreenContainer'
import { AppContext } from '../constants/Context'

export function LoginScreen ({ navigation }) {
  const { login } = React.useContext(AppContext)

  return (
    <ScreenContainer>
      <View>
        <Text>
          login screen
        </Text>
        <Button
          onPress={login}
          title="Fake Login"
          color="#841584"
        />
      </View>

    </ScreenContainer>
  )
}
