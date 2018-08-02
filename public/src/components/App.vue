<template>
	<v-app dark id="app">
		<div class="container">
			<div class="row col-md-6 offset-md-3">
				<create-todo></create-todo>
				<list-todo></list-todo>
			</div>
		</div>
	</v-app>
</template>

<script>
	import CreateTodo from './CreateTodo.vue';
	import ListTodo from './ListTodo.vue';
	export default {
		name: 'app',
		data(){
			return{}
		},
		components: {CreateTodo, ListTodo}
	}
</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
</style>