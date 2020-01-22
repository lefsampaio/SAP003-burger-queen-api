const { Router } = require('express')
const { Client } = require('pg')
const routes = Router();

routes.post('/users', async (req, res) => {
    const client = new Client()
    await client.connect()
    const result = await client.query({
        text: 'select * from Users;'
    })
    await client.end()
    res.send(result.rows)
})
module.exports = routes;