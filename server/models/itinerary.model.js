const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
        default: 3
    },
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
    cityName: {
        type: String // google nombre ejemplo: madrid (autocomplete)
    },
    location: {
        type: {
            type: String
        },
        address: String,
        coordinates: [Number]
    },
    description: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
    },
    itineraryImage: {
        type: String,
        trim: true
    },
    duration: {
        type: String,
        enum: ['1 día', '2 días', '3 días', '4 días', '5 días', '6 días', '7 días']
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    spots: [{
        type: Schema.Types.ObjectId,
        ref: 'Spots'
    }],
    messages: [messageSchema],
    messagesAmount: {
        type: Number
    },
    messagesSum: {
        type: Number
    }

}, {
    timestamps: true
})

itinerariesSchema.index({ location: "2dsphere" })

const Itineraries = mongoose.model("Itineraries", itinerariesSchema)
module.exports = Itineraries