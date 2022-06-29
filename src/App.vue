<template>
  <div class="row">
    <div class="title-wrapper col-lg-4 col-sm-12 mt-3 text-center">
      <h1 class="title-header">Localizer</h1>
      <div id="processingAlert" class="alert alert-dismissible mx-4" :class="{ 'd-none': !showSuccessAlert, 'alert-success': !dangerAlert, 'alert-danger': dangerAlert }" role="alert">
        {{ alertContent }}
        <button type="button" class="btn-close" aria-label="Close" @click="showSuccessAlert=false;"></button>
      </div>
    </div>
    <div class="col-lg-8 col-sm-12">
      <FileReader @receivedFiles="saveFiles"/>
    </div>
    <div class="col-12">
      <Editor/>
    </div>
  </div>
</template>

<script>
import FileReader from './components/FileReader.vue';
import Editor from './components/Editor.vue';

import { equalize } from './utils/processor.js';

export default {
  name: 'App',
  components: {
    FileReader,
    Editor
  },
  data() {
    return {
      input: {},
      output: {},
      showSuccessAlert: false,
      dangerAlert: false,
      alertContent: null,
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

      // try to equalize key-value pairs in both objects
      try {
        this.output = equalize(data.input, data.output);

        if (Object.keys(this.input).length === 0)
          throw new Error("Detected empty input file! Aborting.");
        else if (this.input === null)
          throw new Error("Input must not be null! Aborting.");
        else if (this.output === null)
          throw new Error("An internal error occured while processing the input files. Aborting.");
        else {
          this.alertContent = "File processing completed successfully.";
          this.dangerAlert = false;
        }
      } catch (e) {
        // Prepare error alert
        this.alertContent = e.message;
        this.dangerAlert = true;
      } finally {
        this.showSuccessAlert = true;
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  overflow-x: hidden;
}

.title-wrapper {
  h1.title-header {
    font-size: 4rem;
    font-weight: bold;
  }
}
</style>
