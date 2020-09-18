import { SearchBar } from 'react-native-elements'
import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import Colors from '../constants/Colors'

export default function CustomSearchBar ({ updateSearchString, searchString, search, platform }) {
  return (
    <SearchBar
      platform={platform}
      placeholder="Search for an artist.."
      onChangeText={updateSearchString}
      value={searchString}
      onSubmitEditing={search}
      style={styles.search}
      inputStyle={styles.input}
      containerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create(
  Platform.select({
    ios: { search: {}, container: {} },
    android: {
      search: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
        backgroundColor: Colors.ultraLightgrey,
        borderRadius: 5
      },
      container: {
        borderBottomWidth: 1,
        borderColor: Colors.lightgrey
      }
    },
    default: { search: {}, container: {} }
  })
)
