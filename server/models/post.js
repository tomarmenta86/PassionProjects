const { Schema, model } = require('mongoose');
const postSchema = new Schema({
    title:{
        type: String,
        required: true,

    },
    description:{
        type: String,
        required :true,
    },
    tag:{
        type: String,
        required: true,
    },
    createdAt:{
      type: Date,
      default: Date.now
    },
    requester_id:{
    
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    budget:{
        type: Number,
    },
    interested_users:[
        {
            type: Schema.Types.ObjectId,
        ref: 'user', 
        }
    ]

},
{
    toJSON:{
        virtuals:true,
        getters: true
    }
})

const Post = model('post', postSchema);

module.exports = Post;