const express = require('express');
const bodyparser = require('body-parser');
const exRouter = require('./router.js');
const app = express();
const port = 2112;

app.use(bodyparser.json());
app.use(express.json());
app.use('/', exRouter);

app.listen(port, () => {
  console.log(`Writevibe listening at http://localhost:${port}`)
});