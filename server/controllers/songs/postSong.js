const pool = require('../../../db/connection.js');

// posts a song to the db, given the album's id
const postSong = async (id, song) => {
  try {
    let res = await pool.query(`INSERT INTO songs(album, title, artwork) VALUES($1, $2, $3);`, [id, song.title, song.artwork]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = postSong;