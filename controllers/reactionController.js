const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId}, 
            { $addToSet: { reactions: req.body }},
            { new: true }
        )
        .then((reaction) => res.json(reaction))
        .catch((e) => res.status(500).json(e))
    }
}