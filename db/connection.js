const pg = require('pg');
const conString = "postgres://postgres@localhost:5432/library";

const pool = new pg.Pool(conString);

module.exports = pool;