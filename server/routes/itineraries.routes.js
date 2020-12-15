const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Itineraries = require('../models/itinerary.model')
const Spots = require('../models/spot.model')
const User = require('../models/user.model')

router.get('/getAllItineraries', (req, res) => {

    Itineraries
        .find()
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneItinerary/:itinerary_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.itinerary_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Itineraries
        .findById(req.params.itinerary_id)
        .populate('owner')
        .populate('spots')
        .populate('messages.user')
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.get('/getAllItinerariesFromUser/:user_id', (req, res) => {

    const userOwnedItineraries = Itineraries.find({ owner: req.params.user_id })
    const userFavItineraries = User.findOne({ _id: req.params.user_id }, 'itinerariesSaved').populate('itinerariesSaved')

    Promise.all([userOwnedItineraries, userFavItineraries])
        .then(result => {
            console.log(result);
            res.json({ owned: result[0], favs: result[1].itinerariesSaved })
        })
})

router.post('/newItinerary', (req, res) => {

    Itineraries
        .create(req.body.itinerary)
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.put('/editItinerary/:itinerary_id', (req, res) => {
  
    Itineraries
        .findByIdAndUpdate(req.params.itinerary_id, req.body.itinerary )
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteItinerary/:itinerary_id', (req, res) => {

    Itineraries
        .findByIdAndDelete(req.params.itinerary_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/:id/message', (req, res) => {
    const { user, text, rating } = req.body.message

    Itineraries
        .findByIdAndUpdate(req.params.id, { $push: { messages: { user, text, rating } } }, { new: true })
        .populate('user')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newSpot', (req, res) => {

    Spots
        .create(req.body.spotInfo)
        .then(theSpot => Itineraries.findByIdAndUpdate(req.body.itineraryId, { $push: { spots: theSpot.id } }, { new: true }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneSpot/:spot_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.spot_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Spots
        .findById(req.params.spot_id)
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))

})

router.put('/editSpot/:spot_id', (req, res) => {

    Spots
        .findByIdAndUpdate(req.params.spot_id, req.body.spot)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.delete('/deleteSpot/:spot_id', (req, res) => {
    Spots
        .findByIdAndDelete(req.params.spot_id)
        .then(() => Itineraries.findByIdAndUpdate(req.body.itinerary_id, { $pull: { spots: req.params.spot_id } }, { new: true }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router