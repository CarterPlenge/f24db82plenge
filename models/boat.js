const mongoose = require("mongoose")
const boatSchema = mongoose.Schema({
    Type: String,
    width: Number,
    height: Number,
    length: Number
})
module.exports = mongoose.model("boat", boatSchema)