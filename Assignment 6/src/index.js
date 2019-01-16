const express = require('express');
const path = require('path');
const app = express();
//const express_server = require('routers') from 'main_express'

const router = require('./node/main_express');
app.use(express.static(path.join(__dirname, '.')))
app.use(router);
app.listen(8080, () => {
    console.log('Listening on port 8080!')
})

function formSubmit(){
	let x = document.getElementById('inputField').value;
}