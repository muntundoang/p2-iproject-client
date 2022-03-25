<template>
  <div id="app">
    <nav-bar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav-bar>
    <router-view/>
  </div>

</template>

<script>
import navBar from './components/navbar.vue'
export default {
  data () {

  },
  components: {
    navBar
  }
}
</script>

<style>
</style>
