const express = require("express")
const router = express.Router()


const User = require("../models/user.model")

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

    User
        .findByIdAndDelete(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/profile/save-itinerary/:itinerary_id', (req, res) => {

    User
        .findByIdAndUpdate(req.user._id, { $push: { itinerariesSaved: req.params.itinerary_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get('/profile/remove-itinerary/:itinerary_id', (req, res) => {

    User
        .findByIdAndUpdate(req.user._id, { $pull: { itinerariesSaved: req.params.itinerary_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

module.exports = router