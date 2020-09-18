import axios from 'axios'

export default {
  async fetchArtists (query, type, limit, offset, token) {
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        params: {
          q: query,
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
}
