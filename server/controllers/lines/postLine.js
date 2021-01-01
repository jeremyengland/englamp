const pool = require('../../../db/connection.js');

// posts a section to the db, given the song's id
const postLine = async (id, line) => {
  try {
    let res = await pool.query(`INSERT INTO lines(section, lineorder, linecontent) VALUES($1, $2, $3);`, [id, line.lineorder, line.linecontent]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = postLine;