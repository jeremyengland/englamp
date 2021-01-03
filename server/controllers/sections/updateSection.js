const pool = require('../../../db/connection.js');

// updates a section in the db, given the section's id and name of column
const updateSection = async (id, line, column) => {
  try {
    let res = await pool.query(`UPDATE sections SET ($1) = ($2) WHERE id = ($3);`, [column, section[column], id]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = updateLine;