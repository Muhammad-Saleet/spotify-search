import { SearchBar } from 'react-native-elements'
import React from 'react'

export default function CustomSearchBar ({ updateSearchString, searchString, search, platform }) {
  return (
    <SearchBar
      platform={platform}
      placeholder="Search for an artist.."
      onChangeText={updateSearchString}
      value={searchString}
      onSubmitEditing={search}
    />
  )
}
