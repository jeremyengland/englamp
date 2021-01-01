const pool = require('../../../db/connection.js');

// posts a demo to the db, given the song's id
const postDemo = async (id, section) => {
  try {
    let res = await pool.query(`INSERT INTO demos(song, section, bio) VALUES($1, $2, $3);`, [id, section.section, section.bio]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = postSection;