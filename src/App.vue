<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FileReader @receivedFiles="saveFiles"/>
</template>

<script>
import FileReader from './components/FileReader.vue'

export default {
  name: 'App',
  components: {
    FileReader
  },
  data() {
    return {
      input: null,
      output: null
    };
  },
  methods: {
    /*
      Save file contents received from another component into data().
      @param {Object} data - An object containing the file contents.
    */
    saveFiles: function (data) {
      console.log(data);
      this.input = data.input;
      this.output = data.output;
    }
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
