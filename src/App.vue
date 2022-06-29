<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FileReader @receivedFiles="saveFiles"/>
</template>

<script>
import FileReader from './components/FileReader.vue'

import {equalize} from './utils/processor.js'

export default {
  name: 'App',
  components: {
    FileReader
  },
  data() {
    return {
      input: {},
      output: {}
    };
  },
  methods: {
    /**
      * Save file contents received from another component into data().
      * @param {Object} data - An object containing the file contents.
      */
    saveFiles: function (data) {
      console.log(data);
      this.input = data.input;

      // equalize key-value pairs in both objects
      this.output = equalize(data.input, data.output);
      console.log(this.input);
      console.log(this.output.hobbies);
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
