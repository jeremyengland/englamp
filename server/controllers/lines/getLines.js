const pool = require('../../../db/connection.js');

// sends a query to get every line, given the section's id
let getLines = async (id) => {
  try {
    let res = await pool.query(`SELECT * FROM lines WHERE section = ($1)`, [id]);
    return res.rows;
  } catch (err) {
    console.log('failed to get lines for section with id ', id, '\n', err);
  }
}

module.exports = getLines;