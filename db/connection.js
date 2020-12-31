const pg = require('pg');
const cn = {
  database: 'library',
  port: 5432,
  host: 'localhost',
  user: 'jeremyengland'
};

const pool = new pg.Pool(cn);

module.exports = pool;