var mongoose = require('mongoose')

//defining the model for todo items

var todo = new mongoose.Schema({
		name: {
			type: String
		},

		done: {
			type: Boolean
		}
	},

	{
		collection: 'todos'
	}
)

module.exports = mongoose.model('Todo', todo)