const express = require('express');
const routes = require('./routes/routes')
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'))
app.use(express.json());
app.use('src/routes', routes);

const apiConfig = {
    port: 3000
}

app.listen(apiConfig.port, () => console.log(`API running on port ${apiConfig.port} ...`))

