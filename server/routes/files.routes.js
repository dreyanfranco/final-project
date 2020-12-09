const express = require('express');
const router = express.Router();

const uploader = require('../configs/cloudinary.config');

router.post('/uploadSignup', uploader.single("profileImage"), (req, res) => {

    if (!req.file) {
        res.status(500).json({ message: 'Error cargando la imagen' });
        return;
    }

    res.json({ secure_url: req.file.path });
})

router.post('/uploadItinerary', uploader.single("itineraryImage"), (req, res) => {

    if (!req.file) {
        res.status(500).json({ message: 'Error cargando la imagen' });
        return;
    }

    res.json({ secure_url: req.file.path });
})

router.post('/uploadSpot', uploader.single("image"), (req, res) => {

    if (!req.file) {
        res.status(500).json({ message: 'Error cargando la imagen' });
        return;
    }

    res.json({ secure_url: req.file.path });
})

module.exports = router;