const express = require('express');
const router = express.Router()
const Model = require('../models/model');

// posting inquiries
router.post('/postInquiries', async (req, res) => {
    const data = new Model({
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        date: new Date()
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// getting inquiries
router.get('/getInquiries', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

// deleting inquiry
router.delete('/deleteInquiry/:id', async (req, res) => {
    try {
        const dataToDelete = await Model.findByIdAndDelete(req.params.id);
        if(!dataToDelete) return res.status(404).json({message: 'Inquiry not found'})
        res.json(dataToDelete)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

module.exports = router;