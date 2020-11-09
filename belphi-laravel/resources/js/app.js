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
import VueRouter from 'vue-router';

import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import {routes} from './routes';

Vue.use(VueRouter);
Vue.use(Vuex);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.component('app-component', require('./components/App.vue').default);
// Vue.component('greeting-component', require('./components/GreetingComponent.vue').default);
Vue.component('starting-component', require('./components/StartingComponent.vue').default);
Vue.component('signup-form-component', require('./components/SignupFormComponent.vue').default);
Vue.component('signin-form-component', require('./components/SigninFormComponent.vue').default);
// Vue.component('dashboard-component', require('./components/DashboardComponent.vue').default);
Vue.component('chats-component', require('./components/ChatsComponent.vue').default);
Vue.component('info-component', require('./components/InfoComponent.vue').default);
Vue.component('about-component', require('./components/AboutComponent.vue').default);
Vue.component('navbar-component', require('./components/NavbarComponent.vue').default);

const store = new Vuex.Store({
    state,
    mutations: mutations,
    getters
})

export const app = new Vue({
    el: '#app',
    router: router,
    store: store
});

