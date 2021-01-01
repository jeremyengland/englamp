const pool = require('../../../db/connection.js');

// posts a section to the db, given the song's id
const postSection = async (id, section) => {
  try {
    let res = await pool.query(`INSERT INTO sections(song, section, bio) VALUES($1, $2, $3);`, [id, section.section, section.bio]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = postSection;