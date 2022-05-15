const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought,
    createThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);

router.route('/:id').get(getSingleThought);

module.exports = router;