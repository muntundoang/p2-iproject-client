<template>
<nav class="bg-gray-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Son Epex</span>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-evenly items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul class="flex items-baseline flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li class="">
      <form id="search-form" action="/results" method="get" name="searchForm">
      <input v-model="videoQuery" class="gap-4 m-1 px-2 py-1" id="search-term" name="search_query" type="text" value="" maxlength="128" placeholder="Search Video here"/>
      <button @click.prevent="searchVid" class="search-type gap-4 m-1 px-2 py-1 border-2 border-black" id="search-button" type="submit">Search Video</button>
      </form>
      </li>
      <li class="">
      <form id="search-form" action="/results" method="get" name="searchForm">
      <input v-model="keyLyricQuery.q_artist" class="gap-4 m-1 px-2 py-1" id="search-term" name="search_query" type="text" value="" maxlength="128" placeholder="Input artist name here" required/>
      <input v-model="keyLyricQuery.q_track" class="gap-4 m-1 px-2 py-1" id="search-term" name="search_query" type="text" value="" maxlength="128" placeholder="Input song title here" required/>
      <input v-model="keyLyricQuery.q_lyrics" class="gap-4 m-1 px-2 py-1" id="search-term" name="search_query" type="text" value="" maxlength="128" placeholder="Input part of the lyric here" required/>
      <button @click.prevent="searchLyric" class="search-type gap-4 m-1 px-2 py-1 border-2 border-black" id="search-button" type="submit" value="Search">Search Lyric</button>
      </form>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      videoQuery: '',
      lyricQuery: '',
      keyLyricQuery: {
        q_artist: '',
        q_track: '',
        q_lyrics: ''
      }
    }
  },
  methods: {
    searchVid () {
      const payload = {
        q: this.videoQuery
      }
      this.$store.dispatch('getDataVideo', payload)
    },
    searchLyric () {
      const payload = this.keyLyricQuery
      this.$store.dispatch('getSearchDataLyric', payload)
    }
  }
}
</script>

<style>

</style>
