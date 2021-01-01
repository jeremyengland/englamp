const pool = require('../../../db/connection.js');

// verifies user in the db given email and password
let getUser = async (req) => {
  try {
    let res = await pool.query(`SELECT * FROM users WHERE email = ($1) AND password = crypt(($2), password)`, [req.email, req.password]);
    if (!res.rows.length) {
      return 'incorrect email/password combination';
    } else {
      delete res.rows[0].password;
      return res.rows[0];
    }
  } catch (err) {
    console.log('failed to get user with email ', req.email, '\n', err);
  }
}

module.exports = getUser;