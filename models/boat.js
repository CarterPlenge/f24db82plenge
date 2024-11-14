const mongoose = require("mongoose")
const boatSchema = mongoose.Schema({
    Type: String,
    width: Number,
    hight: Number,
    length: Number
})
module.exports = mongoose.model("boat", boatSchema)