const Thought = require('../models/Thought');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((e) => res.status(500).json(e))
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.id })
        .select('-__v')
        .then((thought) => 
        !thought 
        ? res.status(404).json({message: 'No thought with that id.'})
        : res.json(thouhgt)
        )
        .catch((e) => res.status(500).json(e));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((e) => {
            return res.status(500).json(e)
        })
    }
}