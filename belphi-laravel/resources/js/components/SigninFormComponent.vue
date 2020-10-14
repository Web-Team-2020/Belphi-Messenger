<template>
    <div class="col-md-6">

        <h3>Sign in </h3>

        <form>
            <div class="form-group">
                <label for="email"> Your email </label>
                <input v-model="email" class="form-control" type="email" name="email" id="email">
            </div>

            <div class="form-group">
                <label for="password"> Your password </label>
                <input v-model="password" class="form-control" type="password" name="password" id="password">
            </div>
        </form>

        <button type="submit" class="btn-hover color-6" @click="formSignin">
            Sign in
        </button>


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
            password: ''
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
                })
                .catch(function (error) {
                    console.log('failed');
                    console.log(typeof error);
                });
        },
        back() {
            this.$store.commit('changeInit');
        }
    },

}
</script>

<style scoped>
</style>
