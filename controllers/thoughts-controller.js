const {Thoughts,Users} = require('../models');

const ThoughtsController = {
    getAllThoughts(req, res) {
        Thoughts.find({})
            .select('-__v')
            .sort({
                _id: -1
            })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getThoughtById({params}, res) {
        Thoughts.findOne({_id: params.thoughtId})
            .select('-__v')
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                  res.status(404).json({ message: "Thought incorrect please enter correct user thought." });
                  return;
                }
                res.json(dbThoughtData);
              })
              .catch((err) => {
                res.status(400).json(err);
              });
          },

          createThought({ body }, res) {
            Thoughts.create(body)
            .then(({
                _id
            }) => {
                return Users.findOneAndUpdate(
                {_id: body.userId},{$push: {thoughts: _id}},{new: true});
            })
              .then((dbUserData) => res.json(dbUserData))
              .catch((err) => res.json(err));
          },

    updateThought({params,body}, res) {
        Thoughts.findOneAndUpdate(
            {_id: params.thoughtId}, body, {new: true,runValidators: true})
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: "Thought incorrect please enter correct user thought."
                    });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    deleteThought({params}, res) {
        Thoughts.findOneAndDelete({_id: params.thoughtId })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    },

    addReactionToThought({params,body}, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },{ $push: { reactions: body } },{ new: true, runValidators: true }
)
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'Thought incorrect please enter correct user thought.'
                    });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));

    },

    removeReactionFromThought({params}, res) {
        Thoughts.findOneAndUpdate(
            {_id: params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new: true})
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({
                message: 'Thought incorrect please enter correct user thought.'
            });
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err => res.json(err));
}
};

module.exports = ThoughtsController;