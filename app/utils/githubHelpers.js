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


module.exports = {

  /** 
   * Fetches data from GitHub
   * @param {Array} players 
   * @return {Promise}
   */
  getPlayersInfo: players => {
    return  axios.all(
              players.map(username => getUserInfo(username))
            ).then(info => 
              info.map(user => user.data)
            ).catch(err => {
              console.log('Error in getPlayersInfo', err);
            });
  }

};