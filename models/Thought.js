const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema (
    {
        thoughtText : {
            type : String, 
            required : true, 
            trim: true,
            minlength : 1, 
            maxlength : 280
        }, 
        createdAt : {
            type : Date, 
            default : Date.now, 
        }, 
        username : [
            {
                type: String,
                required: true,
                ref: 'User',
            },
        ],
        reactions : [reactionSchema],
    }, 
    {
        toJSON: {
            getters: true,
        },

    }
       
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema); 

module.exports = Thought;