const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const PORT = process.env.PORT || 3000

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello Express app');
});

app.listen(PORT, () => console.log('server started'));