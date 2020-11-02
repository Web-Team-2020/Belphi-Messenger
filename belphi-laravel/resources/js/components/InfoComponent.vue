<template>
    <div>
        <div class="p-4 list-group list-group-flush">
            <form class=" list-group-item col-sm-6 container">
                <div class="form-group row">
                    <label for="yourName" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditName" v-model="user.name" type="text" class="form-control"
                               id="yourNameDis"
                               placeholder="yourName" disabled>
                        <input v-if="showEditName" v-model="user.name" type="text" class="form-control" id="yourName"
                               placeholder="yourName">
                    </div>
                    <button v-show="!showEditName" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editName">Edit
                    </button>
                    <button v-show="showEditName" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="saveName">Save
                    </button>
                    <button v-show="showEditName" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editName">Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourID" class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditID" v-model="user.id" type="text" class="form-control" id="yourIDDis"
                               placeholder="yourID"
                               disabled>
                        <input v-if="showEditID" v-model="user.id" type="text" class="form-control" id="yourID"
                               placeholder="yourID">
                    </div>
                    <button v-if="!showEditID" type="button" class="btn btn-outline-warning col-sm-2" @click="editID">
                        Edit
                    </button>
                    <button v-if="showEditID" type="button" class="btn btn-outline-warning col-sm-2" @click="saveID">
                        Save
                    </button>
                    <button v-if="showEditID" type="button" class="btn btn-outline-warning col-sm-2" @click="editID">
                        Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourBio" class="col-sm-2 col-form-label">Bio</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditBio" v-model="user.bio" type="text" class="form-control" id="yourBioDis"
                               placeholder="yourBio" disabled>
                        <input v-if="showEditBio" v-model="user.bio" type="text" class="form-control" id="yourBio"
                               placeholder="yourBio">
                    </div>
                    <button v-if="!showEditBio" type="button" class="btn btn-outline-warning col-sm-2" @click="editBio">
                        Edit
                    </button>
                    <button v-if="showEditBio" type="button" class="btn btn-outline-warning col-sm-2" @click="saveBio">
                        Save
                    </button>
                    <button v-if="showEditBio" type="button" class="btn btn-outline-warning col-sm-2" @click="editBio">
                        Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditEmail" v-model="user.email" type="email" class="form-control"
                               id="yourEmailDis" placeholder="yourEmail" disabled>
                        <input v-if="showEditEmail" v-model="user.email" type="email" class="form-control"
                               id="yourEmail" placeholder="yourEmail">
                    </div>
                    <button v-if="!showEditEmail" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editEmail">Edit
                    </button>
                    <button v-if="showEditEmail" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="saveEmail">Save
                    </button>
                    <button v-if="showEditEmail" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editEmail">Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourPhone" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditPhone" v-model="user.phone" type="text" class="form-control"
                               id="yourPhoneDis" placeholder="yourPhone" disabled>
                        <input v-if="showEditPhone" v-model="user.phone" type="text" class="form-control" id="yourPhone"
                               placeholder="yourPhone">
                    </div>
                    <button v-if="!showEditPhone" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editPhone">Edit
                    </button>
                    <button v-if="showEditPhone" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="savePhone">Save
                    </button>
                    <button v-if="showEditPhone" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editPhone">Cancel
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            showEditName: false,
            showEditID: false,
            showEditBio: false,
            showEditEmail: false,
            showEditPhone: false,

            user: {
                name: 'your name',
                id: 'your ID',
                bio: 'your bio',
                email: 'your email',
                phone: 'your phone'

            }

        }
    },
    methods: {
        getUserID() {
            return 2
        },
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
        },
        saveName() {
            this.editName()
            //call a function to change the name in db
        },
        saveID() {
            this.editID()
        },
        saveEmail() {
            this.editEmail()
        },
        saveBio() {
            this.editBio()
        },
        savePhone() {
            this.editPhone()
        }
    },
    mounted() {
        axios.post('/api/info/' + this.getUserID())
            .then(function (response) {
                this.user.name = response.data.name
                this.user.email = response.data.email
                this.user.id = response.data.id
                this.user.phone = response.data.phone
                //console.log(this.user)
                console.log(response);
            }.bind(this))
            .catch(function (error) {

                console.log(error);
            }.bind(this));

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
