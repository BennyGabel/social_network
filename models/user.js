/*   ./models/user.js   */

const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true },
    thoughts: [
        // Reference another table
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]

},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }

)


// get total count of comments and replies on retrieval
userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});




const user = model('user', userSchema);

module.exports = user
