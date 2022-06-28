<template>
  <div class="file-reader" id="fileReader">
    <div class="alert alert-warning file-error-alert" :class="{ 'd-none': !showAlert }">
      {{ error }}
    </div>

    <h2>Input JSON File<sup class="red">*</sup></h2>
    <input class="form-control" type="file" accept="application/json" id="inputFile"/>

    <h2>Output JSON File (optional)</h2>
    <input class="form-control" type="file" accept="application/json" id="outputFile"/>

    <button id="readFileBtn" class="btn-primary btn-lg" @click="readFiles()">Read File(s)</button>
  </div>
</template>

<script type="text/javascript">
  /*
    Resets any non-null String values inside an Object instance to a default
    empty string. The Object passed as parameter may be complex (i.e. have
    nested objects within itself).

    @param {Object} obj - The object to be reset.
    @returns {Object} The object after the reset.
  */
  var recursiveReset = (obj) => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        obj[key] = recursiveReset(obj[key]);
      } else {
        obj[key] = "";
      }
    });

    return obj;
  }

  export default {
    name: "fileReader",
    data() {
      return {
        showAlert: false,
        error: ""
      }
    },
    methods: {
      /*
        This function will read and parse a JSON file from the file input and
        send its contents back to the parent component via the received-files
        event.
      */
      readFiles: function () {
        if (!document.getElementById("inputFile").files.length) {
          this.error = "At least an input file is required before proceeding.";
          this.showAlert = true;
          return;
        }

        this.showAlert = false;

        let inputFile = document.getElementById("inputFile").files[0];
        let outputFile = document.getElementById("outputFile").files.length ? document.getElementById("outputFile").files[0] : null;
        let content = {
          input: {},
          output: {}
        };

        let inputReader = new FileReader();
        let outputReader = new FileReader();

        inputReader.onload = e => {
          content.input = JSON.parse(e.target.result);

          outputReader.onload = f => {
            content.output = JSON.parse(f.target.result);
            this.$emit("received-files", content);
          };

          if (outputFile !== null) {
            outputReader.readAsText(outputFile);
          } else {
            content.output = recursiveReset(JSON.parse(JSON.stringify(content.input)));
            this.$emit("received-files", content);
          }
        };

        inputReader.readAsText(inputFile);
      }
    }
  }
</script>

<style lang="scss">
  .red {
    color: red;
  }
</style>
