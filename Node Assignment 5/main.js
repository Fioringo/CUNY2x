const fs = require('fs');

let fileNameRoot = "people";

let counter = "";
let a = [];
let b = [];
let promises = [];

promises.push(
	fs.readFile(fileNameRoot + counter + ".json", (err, data) => {
		if(err){
			console.log(err);
			throw err;
		} else {
			a = data.people;
		}
	})
);
counter = "2";
promises.push(
	fs.readFile(fileNameRoot + counter + ".json", (err, data) => {
		if(err){
			console.log(err);
			throw err;
		} else {
			b = data.people;
		}
	})
);
Promise.all(promises).then(() => {

	console.log(a[1]);
	console.log(b[2]);

}), (err) => {
	console.log(toString(err));
	throw err;
}



/*function createCompleteList(){
	let counter = "";
	let a, b;
	fs.readFile(fileNameRoot + counter + ".json", (err, data) => {
		if(err){
			console.log(err);
		} else {
			a = data;
		}
	});
	counter = "2";
	fs.readFile(fileNameRoot + counter + ".json", (err, data) => {
		if(err){
			console.log(err);
		} else {
			b = data;
		}
	});
}*/