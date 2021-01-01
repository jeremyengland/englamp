const pool = require('../../../db/connection.js');

// posts a demo to the db, given the song's id
const postDemo = async (id, demo) => {
  try {
    let res = await pool.query(`INSERT INTO demos(song, title, audio) VALUES($1, $2, $3);`, [id, demo.title, demo.audio]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = postDemo;