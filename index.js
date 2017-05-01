const express   = require('express');
const app       = express();
const moment    = require("moment");

app.get('/:param', function (req, res) {
  res.send(req.param);
});

app.listen(80, function () {
  console.log("Example app listening on port '80'");
});