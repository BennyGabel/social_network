const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, require: true, },    /// How to add width
    createdAt:  { type: Date, default: Date.now },
    username: {type: String, require: true},
    reactions: [reactionSchema]
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

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const thought = model('thought', thoughtSchema)

module.exports = thought