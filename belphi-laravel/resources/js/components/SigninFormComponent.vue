<template>
    <div class="col-md-6">

        <h3>Sign in </h3>
        <div v-if="errors!=''" class="alert alert-danger" role="alert">
            {{errors}}
        </div>
        <form @keydown="errors=''">
            <div class="form-group">
                <label for="email"> Your email </label>
                <input v-model="email" class="form-control" type="email" name="email" id="email">
            </div>

            <div class="form-group">
                <label for="password"> Your password </label>
                <input v-model="password" class="form-control" type="password" name="password" id="password">
            </div>
        </form>

        <!-- <router-link :to="{name: 'dashboard'}"> -->
        <button type="submit" class="btn-hover color-6" @click="formSignin">
            Sign in
        </button>
        <!-- </router-link> -->

        <!-- Below
        <input type="hidden" name="_token" value="">
        ! -->
        <button class="btn-hover color-2" @click="back">
            Back
        </button>


    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            email: '',
            password: '',
            flag_signin: false,
            errors : ''
        }
    },
    methods: {
        formSignin() {
            axios.post('/api/signin', {
                email: this.email,
                password: this.password
            })
                .then(function (response) {
                    console.log('accepted');
                    console.log(response);
                    try {
                        this.$router.push({name : 'home'});
                        this.$store.commit('changeLogout');
                        this.$store.commit('changeId');
                    } catch {
                        console.log('error in router-view');
                    }
                }.bind(this))
                .catch(function (error) {
                    if (error.response.status == 401){
                        this.errors = error.response.data.message
                    }
                    console.log('failed');
                    console.log(typeof error);
                    console.log(error.response.data);
                }.bind(this));
        },
        back() {
            this.$store.commit('changeInit');
        }
    },

}
</script>

<style scoped>
</style>
