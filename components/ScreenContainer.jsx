import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export function ScreenContainer ({ children }) {
  return (
    <ScrollView style={ styles.container }>{children}</ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
