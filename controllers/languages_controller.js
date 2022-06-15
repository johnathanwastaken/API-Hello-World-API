const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')

// Index:
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

// Show:
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.language .toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })
})

module.exports = languages