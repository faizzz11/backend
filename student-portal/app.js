const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let users = []; // In-memory storage for registered users

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const user = {
    name: req.body.name,
    number: req.body.number,
    course: req.body.course,
    stream: req.body.stream,
    semester: req.body.semester,
    username: req.body.username,
    password: req.body.password,
  };
  users.push(user);
  res.redirect('/subjects');
});

app.get('/subjects', (req, res) => {
  res.render('subjects', { subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science'] });
});

app.get('/subjects/:subject', (req, res) => {
  const subject = req.params.subject;
  const chapters = {
    'Math': ['Algebra', 'Calculus', 'Geometry'],
    'Physics': ['Mechanics', 'Optics', 'Thermodynamics'],
    'Chemistry': ['Organic', 'Inorganic', 'Physical'],
    'Biology': ['Botany', 'Zoology', 'Genetics'],
    'Computer Science': ['Programming', 'Data Structures', 'Algorithms']
  };

  res.render('subject', { subject: subject, chapters: chapters[subject] });
});

// Render footer and header
app.use((req, res, next) => {
  res.locals.header = '/partials/header';
  res.locals.footer = '/partials/footer';
  next();
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
