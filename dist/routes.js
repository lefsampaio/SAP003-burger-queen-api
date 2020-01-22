const {
  Router
} = require('express');

const axios = require('axios');

const User = require('./models/User');

const routes = Router();
routes.post('/users', async (request, response) => {
  const {
    github_username
  } = request.body;
  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  const {
    name
  } = apiResponse.data; // const techsArray = techs.split(',').map(tech => tech.trim())

  const user = await User.create({
    name: "Jane"
  });
  console.log(user);
  return response.json(user);
});
module.exports = routes;