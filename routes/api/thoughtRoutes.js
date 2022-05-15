const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought,
    createThought,
    updateThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);

router.route('/:userId').post(createThought)

router.route('/:thoughtId').get(getSingleThought)

router.route('/:userId/:thoughtId').put(updateThought);

module.exports = router;