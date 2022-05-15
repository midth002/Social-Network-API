const User = require('../models/User'); 

module.exports = {
    addFriend(req, res) {
        User.findOneAndUpdate( 
            {_id: req.params.userId }, 
            {$addToSet: { friends: req.params.friendId }},
            { new : true}
        )
        .then((friend) => res.json(friend))
        .catch((e) => res.status(500).json(e))  
    }, 
    removeFriend(req, res) {
        User.findOneAndRemove({_id : req.params.friendId})
        .then((friend) => 
        !friend
        ? res.status(404).json({ message : 'That is not a friend of yours with that ID.'})
        : res.status(200).json({ message: 'Friend has been removed'}))
        .catch((e) => res.status(500).json(e))
    }
}