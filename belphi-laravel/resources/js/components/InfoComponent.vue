<template>
    <div>
        <div class="p-4 list-group list-group-flush">
            <form class=" list-group-item col-sm-6 container">
                <div class="form-group row">
                    <label for="yourName" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="yourName" placeholder="yourName">
                    </div>
                    <button v-if="!showEditName" type="button" class="btn btn-outline-warning col-sm-2" @click="editName">Edit</button>
                    <button v-if="showEditName" type="button" class="btn btn-outline-warning col-sm-2">Save</button>
                    <button v-if="showEditName" type="button" class="btn btn-outline-warning col-sm-2" @click="editName">Cancel</button>
                </div>

                <div class="form-group row">
                    <label for="yourID" class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="yourID" placeholder="yourID">
                    </div>
                    <button v-if="!showEditID" type="button" class="btn btn-outline-warning col-sm-2" @click="editID">Edit</button>
                    <button v-if="showEditID" type="button" class="btn btn-outline-warning col-sm-2">Save</button>
                    <button v-if="showEditID" type="button" class="btn btn-outline-warning col-sm-2" @click="editID">Cancel</button>
                </div>

                <div class="form-group row">
                    <label for="yourBio" class="col-sm-2 col-form-label">Bio</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="yourBio" placeholder="yourBio">
                    </div>
                    <button v-if="!showEditBio" type="button" class="btn btn-outline-warning col-sm-2" @click="editBio">Edit</button>
                    <button v-if="showEditBio" type="button" class="btn btn-outline-warning col-sm-2">Save</button>
                    <button v-if="showEditBio" type="button" class="btn btn-outline-warning col-sm-2" @click="editBio">Cancel</button>
                </div>

                <div class="form-group row">
                    <label for="yourEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control" id="yourEmail" placeholder="yourEmail">
                    </div>
                    <button v-if="!showEditEmail" type="button" class="btn btn-outline-warning col-sm-2" @click="editEmail">Edit</button>
                    <button v-if="showEditEmail" type="button" class="btn btn-outline-warning col-sm-2">Save</button>
                    <button v-if="showEditEmail" type="button" class="btn btn-outline-warning col-sm-2" @click="editEmail">Cancel</button>
                </div>

                <div class="form-group row">
                    <label for="yourPhone" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="yourPhone" placeholder="yourPhone">
                    </div>
                    <button v-if="!showEditPhone" type="button" class="btn btn-outline-warning col-sm-2" @click="editPhone">Edit</button>
                    <button v-if="showEditPhone" type="button" class="btn btn-outline-warning col-sm-2">Save</button>
                    <button v-if="showEditPhone" type="button" class="btn btn-outline-warning col-sm-2" @click="editPhone">Cancel</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showEditName: false,
            showEditID: false,
            showEditBio: false,
            showEditEmail: false,
            showEditPhone: false

        }
    },
    methods: {
        editName() {
            this.showEditName = !this.showEditName
        },
        editID() {
            this.showEditID = !this.showEditID
        },
        editBio() {
            this.showEditBio = !this.showEditBio
        },
        editEmail() {
            this.showEditEmail = !this.showEditEmail
        },
        editPhone() {
            this.showEditPhone = !this.showEditPhone
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

</style>
