import { Dimensions } from 'react-native'

const height = Math.round(Dimensions.get('window').height)
const width = Math.round(Dimensions.get('window').width)

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
}
