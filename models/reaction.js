const mongoose = require('mongoose');
const { Schema, Types } = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {type: String, required: true},   /// How to add width,
    username: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
})


module.exports = reactionSchema;