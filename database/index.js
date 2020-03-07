const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  html_url: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (callback (err, data)) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (err) {
    handleError(err);
  } else {
    callback(data);
  }
}

module.exports.save = save;