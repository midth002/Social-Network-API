const router = require('express').Router();
const {
    getUsers, 
    getOneUser,
    createUser, 
    updateUser,
    deleteUser
} = require('../../controllers/userController');

const {
    addFriend,
    removeFriend
} = require('../../controllers/friendController')

router.route('/').get(getUsers).post(createUser); 

router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friend/:friendId').put(addFriend).delete(removeFriend)

module.exports = router;