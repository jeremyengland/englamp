const pool = require('../../../db/connection.js');

const postUser = async (user) => {
  try {
    let res = await pool.query(`INSERT INTO users(email, username, firstname, lastname, password, avatar, bio) VALUES($1, $2, $3, $4, crypt(($5), gen_salt('bf', 8)), $6, $7);`, [user.email, user.username, user.firstname, user.lastname, user.password, user.avatar, user.bio]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = postUser;