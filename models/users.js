const { Schema, model } = require('mongoose');
const Thoughts = require('./Thoughts')
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            email: 1
        },
        thoughts: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: "Thoughts"
            }]
        },
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "Users"
        }]
    }, {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    });
    userSchema.virtual('friendCount').get(function () {
        return this.friends.length;
    });
    const Users = model("Users", UserSchema);

    module.exports = Users;