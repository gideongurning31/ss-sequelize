const router = require('express').Router()
const UserModel = require('../models/user')

router.route('/').get((req, res) => {
  return UserModel.findAndCountAll()
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error))
})

router.route('/:id').get((req, res) => {
  return UserModel.findOne({ where: { id: req.params.id }})
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error))
})

router.post('/', (req, res) => {
  return UserModel.create(req.body)
    .then(result => res.status(201).json(result))
    .catch(error => res.status(500).json(error))
})

router.put('/:id', (req, res) => {
  return UserModel.update(req.body, { where: { id: req.params.id }})
    .then(result => res.status(201).json(result))
    .catch(error => res.status(500).json(error))
})

router.delete('/:id', (req, res) => {
  return UserModel.destroy({ where: { id: req.params.id }})
    .then(() => res.sendStatus(204))
    .catch(error => res.status(500).json(error))
})

module.exports = router
