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


// import { Router } from 'express'
// import AuthorController from '../controllers/AuthorController'

// const router = Router()
// router.get('/', AuthorController.getAllAuthors)
// router.post('/', AuthorController.addAuthor)
// router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)
// export default router