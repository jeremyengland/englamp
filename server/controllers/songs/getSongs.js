const pool = require('../../../db/connection.js');

// sends a query to get every song on an album, given the album's id
let getSongs = async (id) => {
  try {
    let res = await pool.query(`SELECT * FROM songs WHERE album = ($1)`, [id]);
    return res.rows;
  } catch (err) {
    console.log('failed to get songs for the album with id ', id, '\n', err);
  }
}

module.exports = getSongs;