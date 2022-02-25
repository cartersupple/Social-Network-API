const { Schema, model } = require('mongoose');
const Thoughts = require('./thoughts');
const UserSchema = new Schema(
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
            match: [/.+@.+\..+/, "e-mail not valid!"],
        },
        thoughts: 
            [{
                type: Schema.Types.ObjectId,
                ref: "Thoughts"
            }]
        ,
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
    UserSchema.virtual('friendCount').get(function () {
        return this.friends.length;
    });
    const Users = model("Users", UserSchema);
    module.exports = Users;