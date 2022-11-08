import mongoose from 'mongoose';
const {ObjectId}=mongoose.Schema.Types
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false   
    },
    createdDate: {
        type: Date
    },

    likes:[{type:ObjectId , ref: "User"}],
});


const post = mongoose.model('post', PostSchema);

export default post;