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

exports.boat_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Boat.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Boat delete on DELETE
exports.boat_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Boat.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Boat update on PUT
exports.boat_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Boat.findById( req.params.id)
        // Do updates of properties
        if(req.body.Type) toUpdate.Type = req.body.Type;
        if(req.body.width) toUpdate.width = req.body.width;
        if(req.body.height) toUpdate.height = req.body.height;
        if(req.body.length) toUpdate.length = req.body.length;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

/*
// Handle a show one view with id specified by query
exports.boat_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Boat.findById( req.query.id)
        res.render('boatdetail', { title: 'Boat Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }

};
*/
exports.boat_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id);  // Log the ID received
    try {
        const result = await Boat.findById(req.query.id);  // Query the DB
        console.log("Query result: ", result);  // Log the result of the query
        if (!result) {
            // Handle case where no boat was found
            res.status(404).send('Boat not found');
            return;
        }
        res.render('boatdetail', { title: 'Boat Detail', toShow: result });
    } catch (err) {
        console.error("Error fetching boat: ", err);  // Log the error for debugging
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a boat.
// No body, no in path parameter, no query.
// Does not need to be async
exports.boat_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('boatcreate', { title: 'Boat Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a boat.
// query provides the id
exports.boat_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Boat.findById(req.query.id)
        res.render('boatupdate', { title: 'Boat Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.boat_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Boat.findById(req.query.id)
        res.render('boatdelete', { title: 'Boat Delete', toShow: result});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
