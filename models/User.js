const { Schema, model } = require('mongoose');
// const validateEmail = require('../utils/validate')

const userSchema = new Schema ( 
    {
        username : {
            type : String, 
            required : true, 
            trim : true, 
            unique : true
        }, 
        email : {
            type : String,
            required : true, 
            unique : true, 
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
        },
        thoughts : [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }, 
        ],
        friends : [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    }, 
    {
    toJSON: {
        getters: true,
    },
    id: false,
  }
); 

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})



const User = model('user', userSchema); 

module.exports = User;