<template>
  <div class="file-reader" id="fileReader">
    <div class="alert alert-warning file-error-alert" :class="{ 'd-none': !showAlert }">
      {{ error }}
    </div>

    <h2>Input JSON File<sup class="red">*</sup></h2>
    <input class="form-control" type="file" accept="application/json" ref="input"/>

    <h2>Output JSON File (optional)</h2>
    <input class="form-control" type="file" accept="application/json" ref="output"/>

    <button id="readFileBtn" class="btn-primary btn-lg" @click="readFiles()">Read File(s)</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "fileReader",
    data() {
      return {
        inputFile: null,
        inputContent: null,
        outputFile: null,
        outputContent: null,
        showAlert: false,
        error: ""
      }
    },
    methods: {
      /*
        This function will read and parse a JSON file from the file input and
        save its contents to the active memory.
      */
      readFiles: function () {
        if (!this.$refs.input.files.length) {
          this.error = "An input file is required before proceeding.";
          this.showAlert = true;
          return;
        }

        this.inputFile = this.$refs.input.files[0];
        this.outputFile = this.$refs.output.files.length ? this.$refs.output.files[0] : null;

        let inputReader = new FileReader();
        let outputReader = new FileReader();

        inputReader.onload = e => this.inputContent = JSON.parse(e.target.result);
        outputReader.onload = e => this.outputContent = JSON.parse(e.target.result);

        inputReader.readAsText(this.inputFile);
        if (this.outputFile) outputReader.readAsText(this.outputFile);
      }
    }
  }
</script>
