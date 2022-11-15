const Pirate = require("../models/model");

module.exports.findAll = (req, res) => {
    Pirate.find()
        .then(results => res.json(results))
        .catch(err => res.status(400).json(err))
}

module.exports.findById = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json(err))
}

module.exports.createOne = (req, res) => {
    Pirate.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteById = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json(err))
}

module.exports.editById = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(results => res.json(results))
        .catch(err => res.status(400).json(err))
}