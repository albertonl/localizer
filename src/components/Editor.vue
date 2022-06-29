<template>
  <div id="jsonEditor" class="row">
    <div id="inputReader" class="col-lg-6 col-sm-12">
        <table class="path-wrapper mx-auto mb-3">
            <tr>
                <td>Current path:</td>
                <td id="jsonCurrentPath" class="path"></td>
            </tr>
        </table>
        <div id="valueReader" class="d-block mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi reprehenderit vel doloremque soluta distinctio at suscipit delectus quaerat non nihil nostrum facilis dolore, praesentium aspernatur obcaecati illo magni earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam suscipit dicta hic amet iusto error modi fugit distinctio perferendis blanditiis itaque deleniti magni possimus, accusamus excepturi iure voluptates animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia reprehenderit, nostrum provident saepe magni quis! Reiciendis, nobis fugit vitae nostrum asperiores omnis atque vel aliquid perferendis laborum inventore voluptatibus porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi? Esse consectetur illo sapiente hic assumenda, itaque repellat aperiam omnis accusamus harum. Nam quibusdam corporis cumque unde neque recusandae! Ex!</div>
        <div class="btn-group btn-group-lg me-2 d-block mx-auto my-4" id="readerControls" role="group" aria-label="Reader controls">
            <button type="button" class="btn btn-outline-secondary" aria-label="Back" title="Back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </button>
            <button type="button" class="btn btn-outline-secondary" aria-label="Forward" title="Forward">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>
        <div class="input-group-wrapper my-4">
            <div class="input-group text-center mx-auto">
                <input type="text" class="form-control" id="goToPath" placeholder="Go to path..." aria-label="Go to path">
                <button type="button" class="btn btn-secondary" id="goToPathBtn">Go</button>
            </div>
        </div>
    </div>
    <div id="outputEditor" class="col-lg-6 col-sm-12">
    </div>
  </div>
</template>

<script type="text/javascript">
    export default {
        name: "jsonEditor"
    }
</script>

<style lang="scss">
    div#valueReader {
        height: 40vh;
        width: 450px;
        outline: 1px solid black;
        padding: 15px;
        font-family: monospace;
        text-align: left;
        overflow: auto;
        resize: both;
        background-color: #eee;
    }

    .input-group-wrapper {
        display: block;
        width: 300px !important;
        margin-left: auto;
        margin-right: auto;
    }
</style>