const ProductRoutes = require('./routes/ProductRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const TableRoutes = require('./routes/TableRoutes');
const OrderItemRoutes = require('./routes/OrderItemRoutes');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

app.use('/products', ProductRoutes);
app.use('/tables', TableRoutes);
app.use('/orders', OrderRoutes);
app.use('/order-itens', OrderItemRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Boas-vindas à API Burger Queen!',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app




