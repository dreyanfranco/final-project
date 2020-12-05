const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        enum: [0, 1, 2, 3, 4, 5]
    },
}, {
    timestamps: true
})

const spotsSchema = new Schema({
    description: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
    },
    name: {
        type: String // google nombre ejemplo: sol
    },
    spotImage: {
        type: String,
        trim: true
    },
    spotLocation: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

const itinerariesSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
        set: text => text.charAt(0).toUpperCase() + text.substring(1)
    },
    description: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
    },
    cityLocation: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    duration: {
        type: String,
        enum: ['1 día', '2 días', '3 días', '4 días', '5 días', '6 días', '7 días']
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    spots: [spotsSchema],
    messages: [messageSchema]
}, {
    timestamps: true
})

const Itineraries = mongoose.model("Itineraries", itinerariesSchema)
module.exports = Itineraries