require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const OrderController = require('./controllers/orderController');

const { authentication } = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const cors = require('cors');


app.use(cors())

// middleware body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//pub site
app.get('/')
app.get('/items/:id')

// auth
app.post('/login')
app.post('/add-user')

// orders
app.use(authentication)
app.post('/orders/:id')
app.put('/orders/:id')
app.delete('/orders/:id')

app.use(errorHandler)

module.exports = app;