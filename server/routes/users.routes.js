const express = require("express")
const router = express.Router()

const Itineraries = require('../models/itinerary.model')
const User = require('../models/user.model')

router.get('/getAllUsers', (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editUser/:user_id', (req, res) => {

    User
        .findByIdAndUpdate(req.params.user_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteUser/:user_id', (req, res) => {
    const deleteUser = User.findByIdAndDelete(req.params.user_id)
    const deleteUserItineraries = Itineraries.findOneAndDelete({ owner: req.params.user_id })

    Promise.all([deleteUser, deleteUserItineraries])
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/profile/save-itinerary/:itinerary_id', (req, res) => {
    res.send('funciono')
    // User
    //     //.findByIdAndUpdate(req.user._id, { $push: { itinerariesSaved: req.params.itinerary_id } }, { new: true })
    //     .findByIdAndUpdate(req.user._id, { username: req.user._id }, { new: true })
    //     .then(response => res.json(response))
    //     .catch(err => res.status(500).json(err))

})

router.put('/profile/remove-itinerary/:itinerary_id', (req, res) => {

    User
        //.findByIdAndUpdate(req.user._id, { $pull: { itinerariesSaved: req.params.itinerary_id } }, { new: true })
        .findByIdAndUpdate(req.user._id, { $pull: { itinerariesSaved: req.params.itinerary_id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

module.exports = router