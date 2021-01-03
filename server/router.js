const Router = require('express');
const path = require('path');
const router = Router();

// all required controllers
const getUser = require('./controllers/users/getUser.js');
const postUser = require('./controllers/users/postUser.js');
const getAlbums = require('./controllers/albums/getAlbums.js');
const postAlbum = require('./controllers/albums/postAlbum.js');
const getSongs = require('./controllers/songs/getSongs.js');
const postSong = require('./controllers/songs/postSong.js');
const getSections = require('./controllers/sections/getSections.js');
const postSection = require('./controllers/sections/postSection.js');
const getLines = require('./controllers/lines/getLines.js');
const postLine = require('./controllers/lines/postLine.js');
const getDemos = require('./controllers/demos/getDemos.js');
const postDemo = require('./controllers/demos/postDemo.js');

// hosts client files
router.use(Router.static(path.join(__dirname, '/../dist')));

// checks status of the router
router.get('/check-pulse', (req, res) => res.send('thanks, doc').status(200));

//- ROUTES FOR USER API BELOW -//

// route for getting a single user
router.get('/api/users', async (req, res) => {
  try {
    const email = req.query.email;
    const password = req.query.password;
    let user = await getUser({email: email, password: password});
    res.send(user).status(200);
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

// route for posting a single user
router.post('/api/users', (req, res) => {
  try {
    let post = postUser(req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

//- ROUTES FOR ALBUM API BELOW -//

// route for getting albums for a user
router.get('/api/users/:userid/albums', async (req, res) => {
  const { userid } = req.params;
  try {
    let albums = await getAlbums(userid);
    res.send(albums).status(200);
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

// route for posting a single album
router.post('/api/users/:userid/albums', (req, res) => {
  const { userid } = req.params;
  try {
    let post = postAlbum(userid, req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

//- ROUTES FOR SONG API BELOW -//

// route for getting songs for a user
router.get('/api/albums/:albumid/songs', async (req, res) => {
  const { albumid } = req.params;
  try {
    let songs = await getSongs(albumid);
    res.send(songs).status(200);
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

// route for posting a single song
router.post('/api/albums/:albumid/songs', (req, res) => {
  const { albumid } = req.params;
  try {
    let post = postSong(albumid, req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

//- ROUTES FOR SECTION API BELOW -//

// route for getting sections for a song
router.get('/api/songs/:songid/sections', async (req, res) => {
  const { songid } = req.params;
  try {
    let sections = await getSections(songid);
    res.send(sections).status(200);
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

// route for posting a single section
router.post('/api/songs/:songid/sections', (req, res) => {
  const { songid } = req.params;
  try {
    let post = postSection(songid, req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

//- ROUTES FOR LINE API BELOW -//

// route for getting lines for a section
router.get('/api/sections/:secid/lines', async (req, res) => {
  const { secid } = req.params;
  try {
    let lines = await getLines(secid);
    res.send(lines).status(200);
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

// route for posting a single line
router.post('/api/sections/:secid/lines', async (req, res) => {
  const { secid } = req.params;
  try {
    let post = await postLine(secid, req.body);
    res.send(post).status(200);
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

//- ROUTES FOR DEMO API BELOW -//

// route for getting demos for a song
router.get('/api/songs/:songid/demos', async (req, res) => {
  const { songid } = req.params;
  try {
    let demos = await getDemos(songid);
    res.send(demos).status(200);
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

// route for posting a single demo
router.post('/api/songs/:songid/demos', (req, res) => {
  const { songid } = req.params;
  try {
    let post = postDemo(songid, req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(404);
    res.end();
  }
});

module.exports = router;