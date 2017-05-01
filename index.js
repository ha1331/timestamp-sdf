const express   = require('express');
const app       = express();
const moment    = require("moment");

const port = 3000;

app.get('/:param', function (req, res) {
  res.send(req.param);
});
app.get('/', function (req, res) {
  res.send("asdafs");
});

app.listen(port, function () {
  console.log(`Example app listening on port '${port}'`);
});