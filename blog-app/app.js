// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [];

app.get('/', (req, res) => {
  res.render('index', { posts: posts });
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postContent
  };
  posts.push(post);
  res.redirect('/');
});

app.get('/famousBlogs', (req, res) => {
  res.render('famousBlogs');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
