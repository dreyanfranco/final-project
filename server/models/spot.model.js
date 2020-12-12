const mongoose = require("mongoose")
const Schema = mongoose.Schema

const spotsSchema = new Schema({
    description: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
    },
    image: {
        type: String,
        trim: true
    },
    location: {
        type: {
            type: String
        },
        address: String,
        coordinates: [Number]
    }
}, {
    timestamps: true
})
spotsSchema.index({ location: '2dsphere' })

const Spots = mongoose.model("Spots", spotsSchema)
module.exports = Spots