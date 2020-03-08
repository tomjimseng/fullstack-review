const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  loginName: String,
  repoName: String,
  html_url: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  var userRepo = new Repo({
    id: repo.id,
    loginName: repo.owner.login,
    repoName: repo.name,
    repoUrl: repo.html_url,
    forks: repo.forks,
    watchers: repo.watcher_count
  });

  userRepo.save((err) => {
    if (err) {
      console.log(err);
    }
  })


}

module.exports.save = save;
module.exports.Repo = Repo;