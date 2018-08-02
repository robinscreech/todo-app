'use strict'

import Vue from 'vue';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import App from './components/App.vue'

 
Vue.use(Vuetify)

new Vue({
	el:'app',
	created: function (){
		console.log('root instance was created')
	},
	components: {App},
	methods:{}
})