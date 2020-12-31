const Router = require('express');
const path = require('path');
const router = Router();
const getUser = require('./controllers/users/getUser.js');
const postUser = require('./controllers/users/postUser.js');

router.use(Router.static(path.join(__dirname, '/../dist')));

router.get('/check-live', (req, res) => res.sendStatus(200));

// route for getting a single user
router.get('/api/users', async (req, res) => {
  try {
    let user = await getUser(req.body);
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

module.exports = router;