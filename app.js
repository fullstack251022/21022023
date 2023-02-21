// REST
// GET: id should be passed in url, if no id return all data
// PUT: id should be passed in url, if values not passed values should be overriten with nulls 
// PATCH: id should be passed in url, data should be passed in body. Update specific fields
// POST: add new data, should return id for specific entity
// DELETE: id should be passed in url, delete specific field

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const usersRouter = require('./router/customersRouter')
const port = 3000;

app.use(bodyParser.json());


app.get('/animal', (req, res) => {
    res.send('I am animal')
})
app.get('/animal/refresh', (req, res) => {
    res.send('refresh page for animal')
})
app.get('/animal/:id', (req, res) => {
    res.send(`I am animal with id ${req.params.id}`)
})


// ROUTER
app.use('/customers', usersRouter);
// TODO


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})