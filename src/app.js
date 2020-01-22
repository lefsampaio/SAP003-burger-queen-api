const express = require('express');
const routes = require('./routes/routes')
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'))
app.use(express.json());
app.use('api/routes', routes);

app.listen(3000);


