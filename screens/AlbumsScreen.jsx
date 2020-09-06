import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { AppContext } from '../constants/Context'
import axios from 'axios'
import AlbumInfoCard from '../components/AlbumInfoCard'
import Colors from '../constants/Colors'

export function AlbumsScreen ({ navigation, route }) {
  const { token } = React.useContext(AppContext)

  const artistID = route.params
  const maxItemsDisplayed = 100
  const limit = 20

  const [nextOffset, setNextOffset] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchFirstBatch = async () => {
      const newData = await fetchData(0)
      setData(extractAndReformatData(newData.items))
    }
    fetchFirstBatch()
  }, [])

  async function fetchData (offset) {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/albums`, {
        params: {
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

  function extractAndReformatData (albumList) {
    return albumList.map((item) => {
      const album = {
        id: item.id,
        name: item.name,
        imageSource: require('../assets/noimage.png'),
        artists: [],
        releaseDate: '',
        totalTracks: 0,
        url: ''
      }

      if (item.images && item.images[1] && item.images[1].url) {
        album.imageSource = { uri: item.images[1].url }
      }

      if (item.artists) {
        album.artists = item.artists.map(artist => artist.name)
      }

      if (item.release_date) {
        album.releaseDate = item.release_date
      }

      if (item.total_tracks) {
        album.totalTracks = item.total_tracks
      }

      if (item.external_urls.spotify) {
        album.url = item.external_urls.spotify
      }

      return album
    })
  }

  async function handleLoadMore () {
    if (data.length >= maxItemsDisplayed) return

    const newData = await fetchData(nextOffset)
    setData(prev => prev.concat(extractAndReformatData(newData.items)))
    setNextOffset(prev => prev + limit)
  }

  function renderCard ({ item }) {
    return (
      <AlbumInfoCard item={item}/>
    )
  }

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white
  }
})
