const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.listen(3005);
console.log('Listening on port 3005');