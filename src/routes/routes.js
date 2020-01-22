const { Router } = require('express')
const Order = require('../models/Order')
const { Client } = require('pg')
const routes = Router();

routes.post('/orders', async (req, res) => {
    const client = new Client(sequelize)
    await client.connect()
    const result = await client.query({
        text: 'select * from orders;'
    })
    await client.end()
    res.send(result.rows)
})
module.exports = routes;