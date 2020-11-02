<template>
    <div class="col-sm-4 container font">
        <pre>This <i><strong>Belphi</strong></i> messenger made by
                    <i><strong>Arash Yousefi</strong></i>
                                & 
                    <i><strong>Mahsa Hosseini</strong></i>
        </pre>
        <pre>You can contact us:</pre>
        <form>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                </div>
                <div class="col-sm-8">
                    <input type="text" readonly class="form-control-plaintext" 
                    id="staticEmail" value="arash.r400@gmail.com">
                </div>
            </div>

            <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                </div>
                <div class="col-sm-8">
                    <input type="text" readonly class="form-control-plaintext" 
                    id="staticEmail" value="mahsahsii@gmail.com">
                </div>
            </div>
        </form>

            <pre>



                        version 1.0</pre>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>
* {
    letter-spacing: 2;
    font-family: serif;
    color: black;
    /* text-shadow: 2px 2px #ffa500; */
}

.font {
    font-size: 1.2em;
}

@media only screen and (max-width: 400px) {
    .font {
        font-size: 0.5em;
    }
}

</style>
