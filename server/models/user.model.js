const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    profileImage: {
        type: String,
        trim: true
    },
    username: String,
    password: String,
    description: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    itineraries: [{
        type: Schema.Types.ObjectId,
        ref: 'Itineraries'
    }],
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
