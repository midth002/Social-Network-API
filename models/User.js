const { Schema, model } = require('mongoose');
const validateEmail = require('../utils/validate')

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
            validate: [validateEmail, 'Please fill a valid email address'], 
            match: [`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`, 'Please enter in a valid email address']
        },
        thoughts : [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }, 
        ],
        friends : [this]
    }, 
    {
    toJSON: {
        getters: true,
    },
  }
); 

const User = model('user', userSchema); 

module.exports = User;