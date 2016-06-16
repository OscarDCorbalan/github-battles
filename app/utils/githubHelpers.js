const axios = require('axios');


// GitHub's query-params with our tokens
const id = 'CLIENT_ID';
const sec = 'SECRET_ID';
const param = `?client_id=${id}&client_secret=${sec}`;


/**
 * Gets a user's information from GitHub
 * @param {string} username User's GitHub name
 * @return {Promise} Will resolve/reject when the request finishes
 */
const getUserInfo = username => 
  axios.get(`https://api.github.com/users/${username}${param}`);


/**
 * Gets a user's repos from GitHub
 * @param {string} username User's GitHub name
 * @return {Promise} Will resolve/reject when the request finishes
 */
const getRepos = username => 
  axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);


/**
 * Gets the sum of the stars of all the repos of a user
 * @param {Array} repos User's GitHub repos
 * @return {number} Sum of stars
 */
const getTotalStars = repos => 
  repos.data.reduce((total, current) => total + current.stargazers_count, 
                    0);



const getPlayerData = player => 
  getRepos(player.login)
  .then(getTotalStars)
  .then(totalStars => {
    return {
      followers: player.followers,
      totalStars: totalStars
    };
  });


const calculateScores = players => [players[0].followers * 3 + players[0].totalStars,
                                    players[1].followers * 3 + players[0].totalStars];


module.exports = {

  /** 
   * Fetches data from GitHub
   * @param {Array} players 
   * @return {Promise}
   */
  getPlayersInfo: players =>
    axios.all(
      players.map(username => getUserInfo(username))
    ).then(info => 
      info.map(user => user.data)
    ).catch(err => {
      console.log('Error in getPlayersInfo', err);
    })
  ,

  battle: players => 
    axios.all(
      players.map(player => getPlayerData(player))
    ).then(calculateScores)
    .catch(err => {console.warn('Error in battle', err)})

};