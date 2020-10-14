<template>
    <div class="col-md-6">

        <h3>Sign up </h3>

        <form>
            <div class="form-group">
                <label for="name"> Your name </label>
                <input v-model="name" class="form-control" type="text" name="name" id="name"
                       :class="[name.length > 0 ?'green':'red']">
            </div>

            <div class="form-group">
                <label for="email"> Your email </label>
                <input v-model="email" class="form-control" type="email" name="email" id="email"
                       :class="[emailphone === 3 || emailphone === 2 ?'green': emailphone === 0 ? 'red':'']">
            </div>

            <div class="form-group">
                <label for="phone"> Your phone </label>
                <input v-model="phone" class="form-control" type="text" name="phone" id="phone"
                       :class="[emailphone === 3 || emailphone === 1 ?'green': emailphone === 0 ? 'red':'']">
            </div>

            <div class="form-group">
                <label for="id"> Your id </label>
                <input v-model="id" class="form-control" type="text" name="id" id="id"
                       :class="[id.length > 0 ?'green':'']">
            </div>

            <div class="form-group">
                <label for="bio"> Your bio </label>
                <input v-model="bio" class="form-control" type="plain-text" name="bio" id="bio"
                       :class="[bio === null ? '': bio.length > 0 ? 'green': '' ]">
            </div>

            <div class="form-group">
                <label for="password"> Your password </label>
                <input v-model="password" class="form-control" type="password" name="password" id="password"
                       :class="[password.length >= 4 ?'green':'red']">
            </div>
        </form>
        <button type="submit" class="btn-hover color-1" @click="formSignup"
                style="color:white; background-color:#a21b24;">
            Sign up
        </button>

        <!-- Below
        <input type="hidden" name="_token" value="">
        ! -->
        <button class="btn-hover color-7" @click="back" style="color:white; background-color:#a21b24;">
            Back
        </button>

    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: '',
            id: '',
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
        back() {
            this.$store.commit('changeInit');
        }
    },
    computed: {
        emailphone: function () {
            if (this.email.length === 0 && this.phone.length === 0) {
                return 0
            } else if (this.email.length > 0 && this.phone.length > 0) {
                return 3
            } else if (this.email.length > 0) {
                return 2
            } else if (this.phone.length > 0) {
                return 1
            }
        }
    }

}
</script>

<style>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.buttons {
    margin: 10%;
    text-align: center;
}

.btn-hover {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;

    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:focus {
    outline: none;
}

.btn-hover.color-1 {
    background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}

.btn-hover.color-2 {
    background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
}

.btn-hover.color-3 {
    background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}

.btn-hover.color-4 {
    background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
}

.btn-hover.color-5 {
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}

.btn-hover.color-6 {
    background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);
    box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
}

.btn-hover.color-7 {
    background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
}

.btn-hover.color-8 {
    background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}

.btn-hover.color-9 {
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}

.btn-hover.color-10 {
    background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a, #FBB03B);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
}

.btn-hover.color-11 {
    background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);
    box-shadow: 0 5px 15px rgba(242, 97, 103, .4);
}


</style>
