<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 class="display-1">Add to-do item</v-flex>
			<v-flex mt-2>
				<v-form @submit.prevent>
					<v-text-field clearable box height="30" hint="Press enter to save." @keypress="typing=true" label="What do you want to do?" v-model="todo" @keyup.enter="addTodo($event)"></v-text-field>
				</v-form>
			</v-flex>
		</v-layout>
	</v-container> 
</template>

<script>
	import axios from 'axios';
	import bus from "./../bus.js"


	export default {
		data(){
			return {
				todo: '',
				typing: false,
			}
		},
		methods: {
			addTodo(event) {
				if (event) event.preventDefault();
				let url = 'http://localhost:4000/api/add'
				let param = {
					name: this.todo,
					done: 0
				};
				axios.post(url, param).then((response) => {
					console.log(response);
					this.clearTodo();
					this.refreshTodo();
					this.typing = false
				}).catch((error) => {
					console.log(error)
				})
			},
			clearTodo(){
				this.todo = ''
			},
			refreshTodo(){
				bus.$emit("refreshTodo")
			}
		}
	}
</script>