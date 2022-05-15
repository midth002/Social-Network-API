const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought,
    createThought,
    updateThought, 
    deleteThought
} = require('../../controllers/thoughtController');

const {
    addReaction, 
} = require('../../controllers/reactionController')

router.route('/').get(getThoughts);

router.route('/:userId').post(createThought)

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(addReaction);

router.route('/:thoughtId/user/:userId').put(updateThought);


module.exports = router;