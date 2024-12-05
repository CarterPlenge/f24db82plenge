const mongoose = require("mongoose")
const boatSchema = mongoose.Schema({
    Type: { type: String, required: true },
    width: { type: Number, required: true, min: 1, max: 1000 },
    height: { type: Number, required: true, min: 1, max: 500 },
    length: { type: Number, required: true, min: 1, max: 1000 }
})
module.exports = mongoose.model("boat", boatSchema)