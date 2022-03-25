import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const urlBase = 'http://localhost:3000'

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
      console.log(this.state.dataVideo)
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

      }
    }
  },
  modules: {
  }
})
