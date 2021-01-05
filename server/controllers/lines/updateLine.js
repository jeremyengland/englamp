const pool = require('../../../db/connection.js');

// updates a line in the db, given the line's id and name of column
const updateLine = async (id, line, column) => {
  console.log("id, line, column: ", id, line, column);
  try {
    let res = await pool.query(`UPDATE lines SET ${column} = ($1) WHERE lineorder = ($2) AND section = ($3);`, [line[column], line.lineorder, id]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = updateLine;