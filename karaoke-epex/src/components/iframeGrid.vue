<template>
  <div>
    <select v-model="keyLyricQuery" class="search-type gap-4 m-1 px-2 py-1" name="search_type">
      <option value="q_artist">Artist</option>
      <option value="q_track" >Title</option>
      <option value="q_lyrics" >Lyric Part</option>
    </select>
    <iframe v-for="video in dataVideo" :key="video.id"
      width="125"
      height="40"
      :src="`https://www.youtube.com/embed/${dataVideo.id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

</template>

<script>
export default {
  name: 'iFrameGrid',
  data () {
    return {
      videoUrl: ''
    }
  }
}
</script>

<style></style>
