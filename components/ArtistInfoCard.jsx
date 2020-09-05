import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image, Rating } from 'react-native-elements'
import helpers from '../misc/helpers'
import Fonts from '../constants/Fonts'

export default function ArtistInfoCard ({ item }) {
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
      onPress={() => console.log('item pressed')}>

      <View style={styles.imageContainer}>
        <Image
          source={item.imageSource}
          style={ styles.image }
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>
            {item.name}
          </Text>
        </View>

        <View style={styles.followersCountContainer}>
          {renderFollowersCount()}
        </View>

        <View style={styles.ratingContainer}>
          <Rating
            readonly
            imageSize={15}
            fractions={1}
            startingValue={item.popularity / 20}
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
    marginHorizontal: 30,
    marginVertical: 15
  },
  imageContainer: {
  },
  nameContainer: {

  },
  followersCountContainer: {
  },
  ratingContainer: {
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 20
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10
  },
  nameText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    includeFontPadding: false,
    textAlignVertical: 'top'
  },
  followersCountText: {
    fontFamily: Fonts.regular,
    fontSize: 14
  },
  rating: {
    alignItems: 'flex-start'
  }
})
