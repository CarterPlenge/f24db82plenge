var express = require('express');
const boat_controlers=require('../controllers/boat');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
};

router.get('/detail', boat_controlers.boat_view_one_Page);
router.get('/create', secured, boat_controlers.boat_create_Page);
router.get('/update', secured, boat_controlers.boat_update_Page);
router.get('/delete', secured, boat_controlers.boat_delete_Page);

router.get('/', boat_controlers.boat_view_all_Page);
router.post('/', boat_controlers.boat_create_post);
router.get('/:id', boat_controlers.boat_detail);
router.put('/:id', boat_controlers.boat_update_put);
router.delete('/:id', boat_controlers.boat_delete);

module.exports = router;