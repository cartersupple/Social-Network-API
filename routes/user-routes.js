const router = require("express").Router();
const {
    getAllUsers,
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend, 
    deleteFriend
} = require('../../controllers/users-controller');

router.route("/")
router.get(getAllUsers)
router.post(createUser);
router.route("/:userId")
router.get(getUserById)
router.put(updateUser)
router.delete(deleteUser);
router.route("/:userId/friends/:friendId")
router.post(addFriend)
router.delete(deleteFriend);


module.exports = router;