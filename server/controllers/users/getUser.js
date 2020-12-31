const pool = require('../../../db/connection.js');

let getUser = async (req) => {
  try {
    let res = await pool.query(`SELECT * FROM users WHERE email = ($1) AND password = crypt(($2), password)`, [req.email, req.password]);
    return res.rows;
  } catch (err) {
    console.log('failed to get user with email ', req.email);
    return err;
  }
}

module.exports = getUser;