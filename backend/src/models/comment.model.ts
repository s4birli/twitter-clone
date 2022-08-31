import mongoose, { Schema } from "mongoose";

export interface CommentInput {
    comment: string;
    username: string;
    profileImg: string;
    tweetId: string;
    blockComment: boolean; 
}
export interface CommentDocument extends mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const commentSchema = new Schema(
    { 
        comment: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: false },
        profileImg: { type: String, required: true, unique: false }, 
        tweetId: { type: String, required: true, unique: false }, 
        blockComment: { type: Boolean, required: true, unique: false }, 
    }, 
    { 
        timestamps: true 
    }
);

const CommentModel = mongoose.model<CommentDocument>("Comment", commentSchema);
export default CommentModel;

