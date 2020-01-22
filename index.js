const express = require('express');
const { User } = require('./app/models');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;
// User.create({ name: 'Le', email: 'claudio@rocketseat.com.br', password: '123456' });
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/users', routes);
// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port);
console.log(`Server started on port - ${port}`);



app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// app.get('/find/:id', (req, res) => {
//   res.json('Im in register');
// });

// app.get('/findall', (req, res) => {
//   res.json('Im in Find All');
// });

// app.put('/update/:id', (req, res) => {
//   res.json('Im in update');
// });

// app.delete('/users/:id', (req, res) => {
//   res.json('Im in delete');
// });

