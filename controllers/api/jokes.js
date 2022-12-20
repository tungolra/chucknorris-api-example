const request = require("request");
const axios = require("axios");
const rootURL = "https://api.chucknorris.io";
token = process.env.GITHUB_TOKEN;
const jokeURL = `${rootURL}/jokes/random`;
const categoryURL = `${rootURL}/jokes/categories`;

async function index(req, res) {
  try {
    var joke = await axios({
      method: "get",
      url: jokeURL,
    });
    var category = await axios({
      method: "get",
      url: categoryURL,
    });
  } catch (error) {
    console.log(error.message);
  }
  res.render("index", {
    title: "Get Chuck Norris Joke",
    joke: joke.data,
    category: category.data,
  });
}

async function getJokeforCategory(req, res) {
  let categoryReq = req.query.category;
  const categoryJokeURL = `${rootURL}/jokes/random?category=${categoryReq}`;
  try {
    var categoryJoke = await axios({
      method: "get",
      url: categoryJokeURL,
    });
    var category = await axios({
      method: "get",
      url: categoryURL,
    });
  } catch (error) {}
  res.render("index", {
    title: "Get Chuck Norris Joke",
    joke: categoryJoke.data,
    category: category.data,
  });
  console.log(categoryJoke);
}
module.exports = {
  index,
  getJokeforCategory,
};
