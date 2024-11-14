const Boat = require('../models/boat'); // Import the Boat model

// List of all Boats
exports.boat_list = async function (req, res) {
    try{
        theBoats = await Boat.find();
        res.render('boats', {title: 'Boat Search Results', results :theBoats});
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }       
};

// Handle Boat create on POST.
exports.boat_create_post = async function(req, res) {
    console.log(req.body);
    let document = new Boat();

    // {"Type":"Sail", "width":3, "height":10, "length":30}
    document.Type = req.body.Type;
    document.width = req.body.width;
    document.height = req.body.height;
    document.length = req.body.length;

    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Display all Boats on a page
exports.boat_view_all_Page = async function (req, res) {
    try {
        const boats = await Boat.find();
        res.render('boat', { title: 'Boat List', results: boats }); 
    } 
    catch (err) {
        res.status(500).send({ message: `{"error": ${err}}` });
    }
};

exports.boat_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Boat detail: ' + req.params.id);
};

// Handle Boat delete on DELETE
exports.boat_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Boat delete DELETE ' + req.params.id);
};

// Handle Boat update on PUT
exports.boat_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Boat update PUT ' + req.params.id);
};