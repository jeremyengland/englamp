const pool = require('../../../db/connection.js');

// sends a query to get every section of a song, given the song's id
let getSections = async (id) => {
  try {
    let res = await pool.query(`SELECT * FROM sections WHERE song = ($1)`, [id]);
    return res.rows;
  } catch (err) {
    console.log('failed to get sections for song with id ', id, '\n', err);
  }
}

module.exports = getSections;