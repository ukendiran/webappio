const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Node Express App");
})

app.get('/about', (req, res) => {
    res.send('Test Route!');
})

app.get('/test', (req, res) => {
    res.send('Test Route!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})