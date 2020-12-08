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

module.exports = router;