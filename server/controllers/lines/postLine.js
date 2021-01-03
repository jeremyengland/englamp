const pool = require('../../../db/connection.js');

// posts a line to the db, given the section's id
const postLine = async (secId, line) => {
  try {
    let res = await pool.query(`INSERT INTO lines(section, lineorder, linecontent) VALUES($1, $2, $3);`, [secId, line.lineorder, line.linecontent]);
    return line.linecontent;
  } catch (err) {
    console.error(err);
  }
}

module.exports = postLine;