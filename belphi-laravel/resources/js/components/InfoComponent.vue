<template>
    <div>
        <div class="p-4 list-group list-group-flush">
            <form class=" list-group-item col-sm-6 container">
                <div class="form-group row">
                    <label for="yourName" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditName" v-model="user.name" type="text" class="form-control"
                               id="yourNameDis"
                               placeholder="" disabled>
                        <input v-if="showEditName" v-model="user.name" type="text" class="form-control" id="yourName"
                               placeholder="">
                    </div>
                    <button v-show="!showEditName" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editName(false)">Edit
                    </button>
                    <button v-show="showEditName" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="saveName">Save
                    </button>
                    <button v-show="showEditName" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editName(false)">Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourID" class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditID" v-model="user.infoid" type="text" class="form-control" id="yourIDDis"
                               placeholder=""
                               disabled>
                        <input v-if="showEditID" v-model="user.infoid" type="text" class="form-control" id="yourID"
                               placeholder="">
                    </div>
                    <button v-if="!showEditID" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editID(false)">
                        Edit
                    </button>
                    <button v-if="showEditID" type="button" class="btn btn-outline-warning col-sm-2" @click="saveID">
                        Save
                    </button>
                    <button v-if="showEditID" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editID(false)">
                        Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourBio" class="col-sm-2 col-form-label">Bio</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditBio" v-model="user.bio" type="text" class="form-control" id="yourBioDis"
                               placeholder="You have no bio" disabled>
                        <input v-if="showEditBio" v-model="user.bio" type="text" class="form-control" id="yourBio"
                               placeholder="">
                    </div>
                    <button v-if="!showEditBio" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editBio(false)">
                        Edit
                    </button>
                    <button v-if="showEditBio" type="button" class="btn btn-outline-warning col-sm-2" @click="saveBio">
                        Save
                    </button>
                    <button v-if="showEditBio" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editBio(false)">
                        Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditEmail" v-model="user.email" type="email" class="form-control"
                               id="yourEmailDis" placeholder="" disabled>
                        <input v-if="showEditEmail" v-model="user.email" type="email" class="form-control"
                               id="yourEmail" placeholder="">
                    </div>
                    <button v-if="!showEditEmail" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editEmail(false)">Edit
                    </button>
                    <button v-if="showEditEmail" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="saveEmail">Save
                    </button>
                    <button v-if="showEditEmail" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editEmail(false)">Cancel
                    </button>
                </div>

                <div class="form-group row">
                    <label for="yourPhone" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-6">
                        <input v-if="!showEditPhone" v-model="user.phone" type="text" class="form-control"
                               id="yourPhoneDis" placeholder="" disabled>
                        <input v-if="showEditPhone" v-model="user.phone" type="text" class="form-control" id="yourPhone"
                               placeholder="">
                    </div>
                    <button v-if="!showEditPhone" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editPhone(false)">Edit
                    </button>
                    <button v-if="showEditPhone" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="savePhone">Save
                    </button>
                    <button v-if="showEditPhone" type="button" class="btn btn-outline-warning col-sm-2"
                            @click="editPhone(false)">Cancel
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
            lastInfo: {},
            user: {
                name: 'your name',
                infoid: 'your ID',
                bio: 'your bio',
                email: 'your email',
                phone: 'your phone'

            }

        }
    },
    methods: {
        getUserID() {
            return 1
        },
        editName(change) {
            this.showEditName = !this.showEditName
            this.updateUserInfo(change)
        },
        editID(change) {
            this.showEditID = !this.showEditID
            this.updateUserInfo(change)
        },
        editBio(change) {
            this.showEditBio = !this.showEditBio
            this.updateUserInfo(change)
        },
        editEmail(change) {
            this.showEditEmail = !this.showEditEmail
            this.updateUserInfo(change)

        },
        editPhone(change) {
            this.showEditPhone = !this.showEditPhone
            this.updateUserInfo(change)

        },
        saveName() {
            this.sendUpdateRequest('name')
            this.editName(true)
            //call a function to change the name in db
        },
        saveID() {
            this.sendUpdateRequest('id')
            this.editID(true)
        },
        saveEmail() {
            this.sendUpdateRequest('email')
            this.editEmail(true)
        },
        saveBio() {
            this.sendUpdateRequest('bio')
            this.editBio(true)
        },
        savePhone() {
            this.sendUpdateRequest('phone')
            this.editPhone(true)
        },
        sendUpdateRequest(type) {
            const data = {id: this.getUserID()};
            if (type == 'email') {
                if (this.lastInfo.data.email == this.user.email)
                    return
                data['email'] = this.user.email
            } else if (type == 'name') {
                if (this.lastInfo.data.name == this.user.name)
                    return
                data['name'] = this.user.name
            } else if (type == 'phone') {
                if (this.lastInfo.data.phone == this.user.phone)
                    return
                data['phone'] = this.user.phone
            } else if (type == 'bio') {
                if (this.lastInfo.data.bio == this.user.bio)
                    return
                data['bio'] = this.user.bio
            } else {
                if (this.lastInfo.data.infoid == this.user.infoid)
                    return
                data['infoid'] = this.user.infoid
            }
            axios.post('/api/update/user/' + type, data)
                .then(function (response) {

                    //console.log(this.user)
                    console.log(response);
                }.bind(this))
                .catch(function (error) {

                    console.log(error);
                }.bind(this));

        },
        updateUserInfo(change) {
            axios.post('/api/info/' + this.getUserID())
                .then(function (response) {
                    this.user.name = response.data.name
                    this.user.email = response.data.email
                    this.user.infoid = response.data.infoid
                    this.user.bio = response.data.bio
                    this.user.phone = response.data.phone
                    //console.log(this.user)
                    if (change)
                        this.lastInfo = response
                    console.log(response);
                }.bind(this))
                .catch(function (error) {

                    console.log(error);
                }.bind(this));

        }
    },
    mounted() {
        this.updateUserInfo(true)
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
