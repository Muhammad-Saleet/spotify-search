import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-elements'
import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'
import * as WebBrowser from 'expo-web-browser'

function AlbumInfoCard ({ item }) {
  function renderArtistsNames () {
    const artistsNames = item.artists
      .reduce((names, name) => {
        return names + name + ', '
      }, '')
      .slice(0, -2)

    return (
      <Text style={styles.artistsNamesText} numberOfLines={1}
        allowFontScaling={false}
        adjustsFontSizeToFit={false}>
        {artistsNames}</Text>
    )
  }

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => WebBrowser.openBrowserAsync(item.url)}>

      <View style={styles.imageContainer}>
        <Image
          source={item.imageSource}
          style={ styles.image }
        />
      </View>

      <View style={styles.detailsContainer0}>
        <View style={styles.detailsContainer1}>
          <View>
            <Text style={styles.nameText}
              allowFontScaling={false}
              adjustsFontSizeToFit={false}
              numberOfLines={2}>
              {item.name}
            </Text>
          </View>

          <View>
            {renderArtistsNames()}
          </View>
        </View>

        <View style={styles.detailsContainer2}>
          <View>
            <Text style={styles.releaseDateText}
              allowFontScaling={false}
              adjustsFontSizeToFit={false}
            >
              {item.releaseDate}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.totalTracksText}
            allowFontScaling={false}
            adjustsFontSizeToFit={false}
          >
            {item.totalTracks + ' tracks'}
          </Text>
        </View>

      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15
  },
  detailsContainer0: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 20
  },
  detailsContainer1: {
    flex: 4,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  },
  detailsContainer2: {
    flex: 2,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-end'
  },
  image: {
    height: 84,
    width: 84,
    borderRadius: 10
  },
  nameText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    includeFontPadding: false,
    textAlignVertical: 'top'
  },
  artistsNamesText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.grey
  },
  releaseDateText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.grey
  },
  totalTracksText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.grey
  }
})

// component will not re-render if ids are equal
function areEqual (prevProps, nextProps) {
  return prevProps.item.id === nextProps.item.id
}

export default memo(AlbumInfoCard, areEqual)
