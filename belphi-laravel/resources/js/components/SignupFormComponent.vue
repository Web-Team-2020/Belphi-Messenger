<template>
    <div class="col-md-6">

        <h3>Sign up </h3>

        <form>
            <div class="form-group">
                <label for="email"> Your email </label>
                <input v-model="email" class="form-control" type="email" name="email" id="email">
            </div>

            <div class="form-group">
                <label for="name"> Your name </label>
                <input v-model="name" class="form-control" type="text" name="name" id="name">
            </div>

            <div class="form-group">
                <label for="id"> Your id </label>
                <input v-model="id" class="form-control" type="text" name="id" id="id">
            </div>

            <div class="form-group">
                <label for="phone"> Your phone </label>
                <input v-model="phone" class="form-control" type="text" name="phone" id="phone">
            </div>

            <div class="form-group">
                <label for="password"> Your password </label>
                <input v-model="password" class="form-control" type="password" name="password" id="password">
            </div>

            <div class="form-group">
                <label for="bio"> Your bio </label>
                <input v-model="bio" class="form-control" type="plain-text" name="bio" id="bio">
            </div>

            <button type="submit" class="btn btn-lg" @click="formSignup" style="color:white; background-color:#a21b24;">
                Sign up
            </button>

            <!-- Below
            <input type="hidden" name="_token" value="">
            ! -->
            <button class="btn btn-lg" @click="back" style="color:white; background-color:#a21b24;">
                Back
            </button>
        </form>

    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: '',
            id: null,
            email: '',
            phone: '',
            bio: null,
            password: ''

        }
    },
    methods: {
        formSignup() {

            axios.post('/api/signup', {
                name: this.name,
                id: this.id,
                password: this.password,
                email: this.email,
                phone: this.phone,
                bio: this.bio
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        back(){
            this.$store.commit('changeInit');
        }
    },

}
</script>

<style scoped>

</style>
