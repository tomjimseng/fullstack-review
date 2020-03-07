const express = require('express');
var bodyParser = require('body-parser');
const git = require('../helpers/github.js');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  const { username } = req.body;
  res.send(username);
  git.getReposByUsername(username, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

