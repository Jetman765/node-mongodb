// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server.');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5b0ec7ea3abb7e27f08d324c')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b0ebe1d65bbc563e92dfccf')
	}, {
		$set: {
			name: 'James (in the future)',
			location: 'Philly bb'
		},
		$inc: {
			age: 2
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});