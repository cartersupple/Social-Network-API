const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReactionToThought,
    removeReactionFromThought,
} = require('../controllers/thoughts-controller');

router
.route("/")
.get(getAllThoughts)
.post(createThought);

router
.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route("/:thoughtId/reactions")
.post(addReactionToThought)

router
.route("/:thoughtId/reactions/:reactionId")
.delete(removeReactionFromThought)

module.exports = router;
