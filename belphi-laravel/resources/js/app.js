/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex)


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('greeting-component', require('./components/GreetingComponent.vue').default);
Vue.component('starting-component', require('./components/StartingComponent.vue').default);
Vue.component('signup-form-component', require('./components/SignupFormComponent.vue').default);
Vue.component('signin-form-component', require('./components/SigninFormComponent.vue').default);
Vue.component('dashboard-component', require('./components/DashboardComponent.vue').default);
Vue.component('chats-component', require('./components/ChatsComponent.vue').default);
Vue.component('info-component', require('./components/InfoComponent.vue').default);
Vue.component('navbar-component', require('./components/NavbarComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const store = new Vuex.Store({
    state,
    mutations: mutations,
    getters
})

export const app = new Vue({
    el: '#app',
    store: store
});

