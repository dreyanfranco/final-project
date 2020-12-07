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
    itinerariesSaved: [{
        type: Schema.Types.ObjectId,
        ref: 'Itineraries'
    }],// para guardar itinerarios de otros users
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
