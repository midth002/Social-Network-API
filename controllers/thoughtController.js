const { ObjectId } = require('mongoose').Types; 
const User = require('../models/User');
const Thought = require('../models/Thought')

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
        //   console.log(req.body)
        .then((thought) => {
      return  User.findOneAndUpdate(
                { _id: req.params.id},
                { $addToSet: { thoughts: thought._id} },
                { new : true}
            );
        })
        .then((dbThought) => 
            !dbThought
                ? res.status(404).json({ message : 'No user with this id. Cannot create thought.'})
                : res.json(dbThought)
        )
        .catch((e) => {
            return res.status(500).json(e)
        })
    }
}