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
    }
}