const path = require('path')
const express = require('express');

const app = express();

app.use('/api', require('./api'));


app.listen(8080, () => {
	console.log("App is listening");
});