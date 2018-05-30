// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server.');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });
	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });
	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// Challenge
	
	// Delete many w/ name = 'Mike'
	db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
		console.log(result);
	});

	// Delete one with _id = ObjectId("5b0ebd6e5433b945d1c72670")
	db.collection('Users').findOneAndDelete({
		_id: new ObjectId("5b0ebd6e5433b945d1c72670")
	}).then((result) => {
		// console.log(result);
		console.log(JSON.stringify(result, undefined, 2));
	});
	// db.close();
});