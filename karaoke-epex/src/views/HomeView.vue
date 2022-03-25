<template>
  <div class="home flex-col justify-center">
    <div class="flex justify-center">
      <div class="flex flex-col w-[20%] p-5">
        <label for="volume">Volume</label>
        <input type="range" min="0" max="1" value=".5" step=".01" id="volume">
        <label for="bass">Bass</label>
        <input type="range" min="-10" max="10" value="0" id="bass">
        <label for="mid">Mid</label>
        <input type="range" min="-10" max="10" value="0" id="mid">
        <label for="treble">Treble</label>
        <input type="range" min="-10" max="10" value="0" id="treble">
      </div>
    </div>
    <div class="flex p-5 justify-center align-bottom">
      <i-frame-youtube></i-frame-youtube>
      <lyric-box></lyric-box>
    </div>
      <canvas id="visualizer"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
// import script from '@/script.js'
import iFrameYoutube from '../components/iframe.vue'
import lyricBox from '../components/lyricBox.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      listVideo: []
    }
  },
  components: {
    iFrameYoutube,
    lyricBox
  }
}
</script>
