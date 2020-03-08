const request = require('request');
const config = require('../config.js');
const mongoSave = require('../database/index.js')

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (error, response, body) => {
   if (error) {
     console.log(error);
   }
    var singleRepo = JSON.parse(body);
    for (var i = 0; i < singleRepo.length; i++) {
      mongoSave.save(singleRepo[i]);
    }
    callback(null, body);
  });
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

}

module.exports.getReposByUsername = getReposByUsername;