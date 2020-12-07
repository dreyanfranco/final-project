const mongoose = require("mongoose")
const Schema = mongoose.Schema

const spotsSchema = new Schema({
    description: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
    },
    name: {
        type: String // google nombre ejemplo: sol (autocomplete)
    },
    image: {
        type: String,
        trim: true
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

const Spots = mongoose.model("Spots", spotsSchema)
module.exports = Spots