import React, { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { AppContext } from '../constants/Context'
import Colors from '../constants/Colors'
import CustomSearchBar from '../components/CustomSearchBar'
import ArtistInfoCard from '../components/ArtistInfoCard'
import FlatList from '../components/core-components/FlatList'
import SpotifyAPI from '../services/SpotifyAPI'

export function SearchScreen ({ navigation }) {
  const { token } = React.useContext(AppContext)

  const maxItemsDisplayed = 100
  const itemsPerPage = 20

  const [searchString, setSearchString] = useState('')
  const [nextOffset, setNextOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  function updateSearchString (value) {
    setSearchString(value)
  }

  async function fetchData (offset) {
    return SpotifyAPI.fetchArtists(searchString, 'artist', itemsPerPage, offset, token)
  }

  function parseData (artistList) {
    return artistList.map((item) => {
      const artist = {
        id: item.id,
        name: item.name,
        imageSource: require('../../assets/noimage.png'),
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
    const newData = await fetchData(0)
    setLoading(false)

    if (newData.artists.total === 0) {
      setData([])
      return
    }
    setData(parseData(newData.artists.items))
    setNextOffset(itemsPerPage)
  }

  async function handleLoadMore () {
    if (!searchString) return
    if (data.length >= maxItemsDisplayed) return

    const newData = await fetchData(nextOffset)
    setData(prev => prev.concat(parseData(newData.artists.items)))
    setNextOffset(prev => prev + itemsPerPage)
  }

  function navigateToAlbums (artistId) {
    navigation.navigate('AlbumsScreen', artistId)
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
        <FlatList
          data={data}
          onLoadMore={handleLoadMore}
          isLoading={loading}
          renderItem={(item) => {
            return (
              <ArtistInfoCard
                item={item}
                navigateToAlbums={navigateToAlbums}/>
            )
          }}
        />
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
  }
})
