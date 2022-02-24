const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReactionToThought,
    removeReactionFromThought
} = require('../../controllers/thoughts-controller');
router.route("/")
router.get(getAllThought)
router.post(createThought);
router.route("/:thoughtId")
router.get(getThoughtById)
router.put(updateThought)
router.delete(deleteThought);
router.route("/:thoughtId/reactions")
router.post(addReactionToThought)
router.route("/:thoughtId/reactions/:reactionId")
router.delete(removeReactionFromThought)

module.exports = router;
