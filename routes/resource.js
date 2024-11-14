const express = require('express');
const router = express.Router();

// Require controller modules
const api_controller = require('../controllers/api');
const boat_controller = require('../controllers/boat');

/// API ROUTE ///
// GET resources base
router.get('/', api_controller.api);

/// BOAT ROUTES ///
// POST request for creating a Boat
router.post('/boats', boat_controller.boat_create_post);

// DELETE request to delete Boat
router.delete('/boats/:id', boat_controller.boat_delete);

// PUT request to update Boat
router.put('/boats/:id', boat_controller.boat_update_put);

// GET request for one Boat
router.get('/boats/:id', boat_controller.boat_detail);

// GET request for list of all Boats
router.get('/boats', boat_controller.boat_list);

module.exports = router;
