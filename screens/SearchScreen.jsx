import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { AppContext } from '../constants/Context'
import axios from 'axios'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import CustomSearchBar from '../components/CustomSearchBar'
import ArtistInfoCard from '../components/ArtistInfoCard'
import Fonts from '../constants/Fonts'

export function SearchScreen ({ navigation }) {
  const { token } = React.useContext(AppContext)

  const maxItemsDisplayed = 100
  const limit = 20
  const type = 'artist'

  const [searchString, setSearchString] = useState('')
  const [nextOffset, setNextOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [noResults, setNoResults] = useState(false)
  const [data, setData] = useState([])

  function updateSearchString (value) {
    setSearchString(value)
  }

  async function fetchData (offset) {
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        params: {
          q: searchString,
          type: type,
          limit: limit,
          offset: offset
        },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  function extractAndReformatData (artistList) {
    return artistList.map((item) => {
      const artist = {
        id: item.id,
        name: item.name,
        imageSource: require('../assets/noimage.png'),
        followerCount: 0,
        popularity: 0
      }

      if (item.images && item.images[1] && item.images[1].url) {
        artist.imageSource = { uri: item.images[1].url }
      }

      if (item.followers && item.followers.total) {
        artist.followerCount = item.followers.total
      }

      if (item.popularity) {
        artist.popularity = item.popularity
      }
      return artist
    })
  }

  async function search () {
    if (!searchString) return

    setLoading(true)
    setNoResults(false)

    const newData = await fetchData(0)
    setLoading(false)

    if (newData.artists.total === 0) {
      setNoResults(true)
      return
    }
    setData(extractAndReformatData(newData.artists.items))
    setNextOffset(limit)
  }

  async function handleLoadMore () {
    if (!searchString) return
    if (data.length >= maxItemsDisplayed) return

    const newData = await fetchData(nextOffset)
    setData(prev => prev.concat(extractAndReformatData(newData.artists.items)))
    setNextOffset(prev => prev + limit)
  }

  function navigateToAlbums (artistId) {
    navigation.navigate('AlbumsScreen', artistId)
  }

  function renderCard ({ item }) {
    return (
      <ArtistInfoCard item={item} navigateToAlbums={navigateToAlbums}/>
    )
  }

  function renderList () {
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size='large' />
        </View>
      )
    } else if (noResults) {
      return (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResults}> No results found</Text>
        </View>
      )
    } else {
      return (
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      )
    }
  }

  return (
    <View style={styles.screenContainer}>
      <CustomSearchBar
        updateSearchString={updateSearchString}
        searchString={searchString}
        search={search}
        platform={Platform.OS}
      />

      <View style={styles.listContainer}>
        {renderList()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white
  },
  listContainer: {
    flex: 1,
    marginBottom: 25
  },
  noResultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.window.height / 4
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.window.height / 4
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  noResults: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.grey
  }
})
