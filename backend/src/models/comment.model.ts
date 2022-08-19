import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    { 
        comment: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: false },
        profileImg: { type: String, required: true, unique: false }, 
        tweetId: { type: String, required: true, unique: false }, 
    }, 
    { 
        timestamps: true 
    }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;