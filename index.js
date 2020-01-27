const { Product } = require('./app/models')
// // const routes = require('./routes/routes');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// { id: 4, name: 'Suco natural de fruta', price: 7, type: 'breakfast' }
app.get('/products', async (req, res) => {
  const product = await Product.findAll()
  res.json(product)
});

app.get('/products/:id', async (req, res) => {
  // console.log(Product.findByPk(req.params.id))
  const productId = await Product.findOne({
    where: { id: Number(req.params.id) }
  })
  res.json(productId)
});

app.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

app.listen(3000, () => console.log("API running on port 3000"))


// // app.put('/update/:id', (req, res) => {
// //   res.json('Im in update');
// // });

// // app.delete('/users/:id', (req, res) => {
// //   res.json('Im in delete');
// // });

// const config = require('./config/database');

// console.log(config)

