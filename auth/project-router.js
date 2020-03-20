const router = require('express').Router()

const Characters = require('./project-model')

router.get('/', (req, res) => {
    res.status(200).json({message: "Working"})
})

module.exports = router;