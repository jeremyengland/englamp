const pool = require('../../../db/connection.js');

// updates a line in the db, given the line's id and name of column
const updateLine = async (id, line, column) => {
  try {
    let res = await pool.query(`UPDATE lines SET ($1) = ($2) WHERE id = ($3);`, [column, line[column], id]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = updateLine;