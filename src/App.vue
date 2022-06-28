<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FileReader/>
</template>

<script>
import FileReader from './components/FileReader.vue'

export default {
  name: 'App',
  components: {
    FileReader
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
