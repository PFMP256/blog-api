const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const postServices = require('./posts.http')


router.post('/', passport.authenticate('jwt', {session: false}), postServices.create)
router.get('/', postServices.getAll)

router.get('/:id', postServices.getById)

exports.router = router