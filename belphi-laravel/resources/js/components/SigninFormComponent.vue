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
        <div class="mb-4 mt-4 d-flex justify-content-center">
            <button type="submit" class="button" @click="formSignin">
                Sign in
            </button>
        </div>


        <!-- Below
        <input type="hidden" name="_token" value="">
        ! -->
        <div class="d-flex justify-content-center">
            <button class="button" @click="back">
                Back
            </button>
        </div>


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
html, body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, #606c88, #3f4c6b);
    font-family: 'Oswald', sans-serif;
}

.button {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 4px;
    position: relative;
    background-color: #16a085;
    border: none;
    color: #fff;
    padding: 20px;
    width: 200px;
    text-align: center;
    transition-duration: 0.4s;
    overflow: hidden;
    box-shadow: 0 5px 15px #193047;
    border-radius: 4px;
}

.button:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000;
}

.button:after {
    content: "";
    background: #1abc9c;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}

.button:focus {
    outline: 0;
}

</style>
