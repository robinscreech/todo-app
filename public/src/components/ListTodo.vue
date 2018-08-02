<template>
	<v-container>
		<v-layout row wrap v-show="todos.length>0">

			<v-flex xs12 headline>To do</v-flex>
			
			<v-layout column>	
			<v-layout v-for="todo in todos">
				<v-flex xs>
					<v-checkbox v-model="todo.done" :value="todo.done" v-on:change="updateTodo(todo)" hint="Mark as Done?"></v-checkbox>

					<v-btn v-if=todo.done outline small fab color=success v-model="todo.done" :value='true' v-on:click="updateTodo(todo)">
						<v-icon>done</v-icon>
					</v-btn>

					<v-btn v-else outline small fab color=success v-model="todo.done" :value='null' v-on:click="updateTodo(todo)">
						<v-icon></v-icon>
					</v-btn>


				</v-flex>

				<v-flex xs10>
					<v-text-field height="20" hint="Press enter to save." :class="todo.done?'todo__done':''" v-model="todo.name" @keypress="todo.editing=true" @keyup.enter="updateTodo(todo)"></v-text-field>
				</v-flex>
				<v-flex xs1>	
					<v-btn outline small fab color=error v-on:click="deleteTodo(todo._id)">
						<v-icon>delete</v-icon>
					</v-btn>
				</v-flex>

				<!--<span class="help-block small" v-show="todo.editing">Hit enter to update</span>-->			
			</v-layout>
			</v-layout>

		</v-layout>

		<div class="row alert alert-info text-center" v-show="todos.length==0">
			<p class="alert alert-info">
				<strong>All Caught Up</strong>
				<br />
				You do not have any items
			</p>
		</div>

	</v-container>
</template>

<script type="text/javascript">
	import axios from 'axios';
	import bus from  './../bus.js';

	export default {
		data() {
			return {
				todos: []
			}
		},
		created: function(){ //get the items and start listening to events once compenent is created
			this.fetchTodo();
			this.listenToEvents();
		},
		methods: {
			fetchTodo(){
				let uri = 'http://localhost:4000/api/all'
				axios.get(uri).then((response) => {
					this.todos = response.data
				});
			},
			updateTodo(todo){
				console.log(todo)
				let id = todo._id;
				let uri = 'http://localhost:4000/api/update/' + id;
				todo.editing = false;
				axios.post(uri, todo).then((response) => {
					console.log(response)
				}).catch((error) => {
					console.log(error)
				})
			},
			deleteTodo(id) {
				let uri = 'http://localhost:4000/api/delete/' + id;
				axios.get(uri);
				this.fetchTodo();
			},
			listenToEvents(){
				bus.$on('refreshTodo', ($event) => {
					this.fetchTodo();
				})
			}
		}
	}
</script>

<style scoped>
    .todo__done {
        text-decoration: line-through !important
    }
/*    .delete__icon {}
    .no_border_left_right {
        border-left: 0px;
        border-right: 0px;
    }
    .flat_form {
        border-radius: 0px;
    }
    .mrb-10 {
        margin-bottom: 10px;
    }
    .addon-left {
        background-color: none !important;
        border-left: 0px !important;
        cursor: pointer !important;
        border-radius: 0px !important;
    }
    .addon-right {
        background-color: none !important;
        border-right: 0px !important;
        border-radius: 0px !important;
    }*/
</style>