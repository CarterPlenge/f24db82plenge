var express = require('express');
const boat_controlers=require('../controllers/boat');
var router = express.Router();

router.get('/', boat_controlers.boat_view_all_Page);

router.post('/', boat_controlers.boat_create_post);

module.exports = router;