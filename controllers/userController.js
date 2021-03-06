const Thought = require('../models/Thought');
const User = require('../models/User'); 

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((e) => res.status(500).json(e));
        }, 
        getOneUser(req, res) {
            User.findOne({ _id: req.params.id })
              .select('-__v')
              .populate('thoughts')
              .populate('friends')
              .then((dbUser) => 
                !dbUser
                  ? res.status(404).json({ message: 'No user found with this id!' })
                  : res.json(dbUser)
              )
              .catch((e) => res.json(e));
          },
        createUser(req, res) {
            User.create(req.body)
            .then((user) => res.json(user))
            .catch((e) => res.status(500).json(e))
        }, 
        updateUser(req, res) {
            User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body}, 
                { new : true}
                )
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user with this id to update on'})
                    : res.json(user)
                )
            .catch((e) => res.status(500).json(e))
        }, 
        deleteUser(req, res) {
            User.findOneAndRemove({ _id: req.params.id})
            .then((user) => 
                !user
                ? res.status(404).json({ message: 'No user with this id to delete on'})
                : Thought.deleteMany({_id: {$in: user.thoughts}})
                )
                .then(() => res.json({ message: 'User and their thoughts have been deleted'}))
                .catch((e) => res.status(500).json(e))
        }
    };


