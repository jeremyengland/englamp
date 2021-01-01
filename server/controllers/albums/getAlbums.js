const pool = require('../../../db/connection.js');

// sends a query to get every album for a user, given the user's id
let getAlbums = async (id) => {
  try {
    let res = await pool.query(`SELECT * FROM albums WHERE userid = ($1)`, [id]);
    return res.rows;
  } catch (err) {
    console.log('failed to get album for user with id ', id, '\n', err);
  }
}

module.exports = getAlbums;