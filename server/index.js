const express = require('express');
var bodyParser = require('body-parser');
const git = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('Am I here');
  const { username } = req.body;
  git.getReposByUsername(username, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('Within the server get request');
  db.Repo.find((err, data) => {
    if (err) {
      console.log(err)
    }
    res.send(data);
  }).sort({repoName: 1}).limit(25)
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

