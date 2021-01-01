const pool = require('../../../db/connection.js');

// sends a query to get every demo for a song, given the song's id
let getDemos = async (id) => {
  try {
    let res = await pool.query(`SELECT * FROM demos WHERE song = ($1)`, [id]);
    return res.rows;
  } catch (err) {
    console.log('failed to get demos for song with id ', id, '\n', err);
  }
}

module.exports = getDemos;