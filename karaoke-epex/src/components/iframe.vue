<template>
  <div>
    <div class="container border-black">
    <select v-model="selectedVideo" class="flex w-full gap-4 m-1 px-2 py-1" name="search_type">
      <option v-for="data in dataVideo" :key="data.videoId" :value="data.videoId">{{data.title}}</option>
    </select>
    </div>
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${selectedVideo}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

</template>

<script>
export default {
  name: 'iFrameYoutube',
  data () {
    return {
      selectedVideo: 'R2lWhV4HzXY'
    }
  },
  computed: {
    dataVideo () {
      return this.$store.state.dataVideo
    }
  },
  methods: {
  }
}
</script>

<style></style>
