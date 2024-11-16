var express = require('express');
const boat_controlers=require('../controllers/boat');
var router = express.Router();

router.get('/', boat_controlers.boat_view_all_Page);
router.post('/', boat_controlers.boat_create_post);
router.get('/:id', boat_controlers.boat_detail);
router.put('/:id', boat_controlers.boat_update_put);

module.exports = router;