<template>
  <div>
    <div class="container border-black">
    <select @change="getLyric" v-model="selectedLyric" class="flex w-full gap-4 m-1 px-2 py-1" name="search_type">
      <option v-for="lyric in dataLyric" :key="lyric.trackId" :value="lyric.trackId">{{`${lyric.artist} - ${lyric.trackName}`}}</option>
    </select>
    </div>
    <p
      id="songLyric"
      rows="4"
      class="block w-[560px] h-[315px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >{{lyricOnScreen}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLyric: ''
    }
  },
  computed: {
    dataLyric () {
      return this.$store.state.dataLyric
    },
    lyricOnScreen () {
      return this.$store.state.lyricOnScreen
    }
  },
  methods: {
    getLyric () {
      this.$store.dispatch('getLyric', this.selectedLyric)
    }
  }
}
</script>

<style></style>
