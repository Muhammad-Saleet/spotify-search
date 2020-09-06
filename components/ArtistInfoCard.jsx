import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image, Rating } from 'react-native-elements'
import helpers from '../misc/helpers'
import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'

function ArtistInfoCard ({ item, navigateToAlbums }) {
  function renderFollowersCount () {
    const followers = helpers.numFormatter(item.followerCount)
    return (
      <Text style={styles.followersCountText}>
        {`${followers} followers`}
      </Text>
    )
  }

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigateToAlbums(item.id)}>

      <Image
        source={item.imageSource}
        style={ styles.image }
      />

      <View style={styles.detailsContainer0}>

        <View style={styles.detailsContainer1}>
          <Text style={styles.nameText} numberOfLines={2}>
            {item.name}
          </Text>
        </View>

        <View style={styles.detailsContainer2}>
          {renderFollowersCount()}
          <Rating
            readonly
            imageSize={15}
            fractions={1}
            startingValue={Math.round(item.popularity / 10) / 2}
            style={styles.rating}
          />
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
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  },
  detailsContainer2: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 5
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
    textAlignVertical: 'top',
    marginTop: 3
  },
  followersCountText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.grey
  },
  rating: {
    alignItems: 'flex-start',
    marginTop: 5
  }
})

export default memo(ArtistInfoCard)
