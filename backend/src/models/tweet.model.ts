import mongoose, { Schema } from "mongoose";

export interface TweetInput {
    text: string;
    username: string;
    profileImg: string;
    image?: string;
    blockTweet: boolean; 
}
export interface TweetDocument extends mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
  }
const tweetSchema = new Schema(
    { 
        text: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: false },
        profileImg: { type: String, required: true, unique: false }, 
        image: { type: String, required: false, unique: false }, 
        blockTweet: { type: Boolean, required: true, unique: false } 
    }, 
    { 
        timestamps: true 
    }
);

const TweetModel = mongoose.model<TweetDocument>("Tweet", tweetSchema);
export default TweetModel;