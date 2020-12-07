const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Itineraries = require('../models/itinerary.model')


router.get('/getAllItineraries', (req, res) => {

    Itineraries
        .find()
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
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newItinerary', (req, res) => {

    Itineraries
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editItinerary/:itinerary_id', (req, res) => {

    Itineraries
        .findByIdAndUpdate(req.params.itinerary_id, req.body)
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
    Itineraries
        .findByIdAndUpdate(req.params.id, { $push: { messages: req.body } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/:id/new-spots', (req, res) => {
    Itineraries
        .findByIdAndUpdate(req.params.id, { $push: { spots: req.body } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// no funciona editar
router.put('/:id/editSpot/:spot_id', (req, res) => {
    Itineraries
        .findByIdAndUpdate(req.params.id, {})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// no funciona eliminar
router.post('/:id/deleteSpot/:spot_id', (req, res) => {
    Itineraries
        .findByIdAndUpdate(req.params.id, { $pull: { spots: req.body } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router