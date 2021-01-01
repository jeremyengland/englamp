const pool = require('../../../db/connection.js');

// posts an album to the db, given the user's id
const postAlbum = async (id, album) => {
  try {
    let res = await pool.query(`INSERT INTO albums(userid, type, title, genre, artists, release, artwork, bio) VALUES($1, $2, $3, $4, $5, $6, $7, $8);`, [id, album.type, album.title, album.genre, album.artists, album.release, album.artwork, album.bio]);
    return 'success';
  } catch (err) {
    console.error(err);
  }
}

module.exports = postAlbum;