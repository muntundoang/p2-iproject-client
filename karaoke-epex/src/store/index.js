import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const urlBase = 'https://client-wew-riolukmant.web.app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataLyric: [],
    dataVideo: [],
    videoId: '',
    lyricOnScreen: ''
  },
  getters: {
  },
  mutations: {
    dataVideo (state, payloads) {
      state.dataVideo = payloads
    },
    dataLyric (state, payloads) {
      state.dataLyric = payloads
    },
    lyric (state, payload) {
      state.lyricOnScreen = payload
    }
  },
  actions: {
    async getDataVideo (context, payload) {
      const { q } = payload
      try {
        const dataVideo = await axios({
          url: `${urlBase}/video`,
          method: 'GET',
          params: {
            q: q
          }
        })
        context.commit('dataVideo', dataVideo.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getSearchDataLyric (context, payload) {
      console.log(payload)
      const qArtist = payload.q_artist
      const qTrack = payload.q_track
      const qLyrics = payload.q_lyrics
      try {
        const dataLyric = await axios({
          url: `${urlBase}/lyric`,
          method: 'GET',
          params: {
            q_artist: qArtist,
            q_track: qTrack,
            q_lyrics: qLyrics
          }
        })
        context.commit('dataLyric', dataLyric.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getLyric (context, payload) {
      const trackId = payload
      try {
        const lyric = await axios({
          url: `${urlBase}/lyric/${trackId}`,
          method: 'GET'
        })
        context.commit('lyric', lyric.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
