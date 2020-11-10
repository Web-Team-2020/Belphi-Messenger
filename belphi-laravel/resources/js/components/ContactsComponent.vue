<template>
    <div class="list-group list-group-flush">
        <div class="list-group-item">
            <button type="button" class="float-right btn-hover color-10">
                Add new contact
            </button>
        </div>
        <br>
        <div class="list-group-item">
            <ul class="list-group list-group-flush">
                <li v-for="(usercontact, index) in usercontacts" v-bind:key="index" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div class="container col-sm-12">
                    <div class="row">
                        <div class="col-sm-10">
                            <p> {{usercontact.name}} </p>
                        </div>
                        <button type="button" class="btn btn-outline-warning col-sm-2">
                            Message
                        </button>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            usercontacts: [
                {name:'Mahsa'}, {name:'Arash'}, {name:'Belphi'}, {name:'BaeBaei'}
            ]
        }
    }
}
</script>

<style scoped>
* {
    letter-spacing: 2;
    font-family: serif;
    color: black;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  padding: 10px;
  flex: 25%;
}

.flex-item-right {
  padding: 10px;
  flex: 75%;
}
</style>
