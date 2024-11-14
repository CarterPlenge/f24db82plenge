const Boat = require('../models/boat'); // Import the Boat model

// List of all Boats
exports.boat_list = async function (req, res) {
    try{
        theBoats = await Boat.find();
        res.send(theBoats);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }       
};

// For a specific Boat
exports.boat_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Boat detail: ' + req.params.id);
};

// Handle Boat create on POST
exports.boat_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Boat create POST');
};

// Handle Boat delete on DELETE
exports.boat_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Boat delete DELETE ' + req.params.id);
};

// Handle Boat update on PUT
exports.boat_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Boat update PUT ' + req.params.id);
};
