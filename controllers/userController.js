const User = require('../models/User'); 

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((e) => res.status(500).json(e));
        }, 
        getOneUser(req, res) { 
            User.findOne({ _id: req.params.userId })
            select('-__v')
            .then((user) => 
            !user 
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
            )
            .catch((e) => res.status(500).json(e))
        }, 

        createUser(req, res) {
            User.create(req.body)
            .then((UserData) => res.json(UserData))
            .catch((e) => res.status(500).json(e))
        }



    };


