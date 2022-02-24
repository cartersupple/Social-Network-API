const {Schema,Types} = require("mongoose");

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 400
    },
    username: {
        type: String,
        required: true
    },    
}, 
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
});

module.exports = ReactionSchema;