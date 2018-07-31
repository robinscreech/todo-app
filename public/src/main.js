'use strict'

import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/App.vue'


// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'

// Vue.use(VueMaterial)

import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

new Vue({
	el:'app',
	created: function (){
		console.log('root instance was created')
	},
	components: {App},
	methods:{}
})