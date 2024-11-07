var express = require('express');
var router = express.Router();

const boats = [
  { Type: "Sail", width: 3, height: 10, length: 30 },
  { Type: "Motor", width: 5, height: 12, length: 40 },
  { Type: "Rowboat", width: 2, height: 4, length: 15 }
];

router.get('/', function(req, res, next) {
  res.render('boat', { title: 'Boat', boats: boats });
});

module.exports = router;