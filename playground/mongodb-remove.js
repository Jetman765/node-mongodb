const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Removes ALL documents
// Todo.remove({}).then((result) => {
// 	console.log(result);
// }) 

// Returns the information, then deletes it.
Todo.findOneAndRemove({_id: '5b1fdf8e3dea5e64b9d04488'}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndRemove('5b1fdf8e3dea5e64b9d04488').then((todo) => {
	console.log(todo);
});