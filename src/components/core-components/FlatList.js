import React from 'react'
import {
  ActivityIndicator,
  FlatList as DefaultFlatList,
  Text
} from 'react-native'

export default function FlatList ({
  data,
  renderItem,
  LoadingComponent,
  NoResultsComponent,
  BlankComponent,
  onLoadMore,
  isLoading,
  ...rest
}) {
  function renderLoadingComponent () {
    if (LoadingComponent) {
      return (
        <LoadingComponent/>
      )
    } else {
      return (
        <ActivityIndicator size='large' style={{ alignSelf: 'center' }}/>
      )
    }
  }

  function renderNoResultsComponent () {
    if (LoadingComponent) {
      return (
        <NoResultsComponent/>
      )
    } else {
      return (
        <Text style={{ color: 'grey', alignSelf: 'center' }}>No results found</Text>
      )
    }
  }

  function renderItemComponent ({ item }) {
    if (renderItem) {
      return (renderItem(item))
    } else {
      return <Text>{JSON.stringify(item)}</Text>
    }
  }

  function renderList () {
    // list is pending update
    if (isLoading) {
      return (renderLoadingComponent())

      // no data has been fetched yet
    } else if (!data) {
      return null

      // api call returned no data
    } else if (data.length === 0) {
      return (renderNoResultsComponent())

      // api call returned data
    } else {
      return (
        <DefaultFlatList
          data={data}
          renderItem={renderItemComponent}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={onLoadMore}
          onEndReachedThreshold={0.5}
          {...rest}
        />
      )
    }
  }

  return (
    renderList()
  )
}
