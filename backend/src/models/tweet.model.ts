import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
    { 
        text: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: false },
        profileImg: { type: String, required: true, unique: false }, 
        image: { type: String, required: true, unique: false }, 
        blockTweet: { type: Boolean } 
    }, 
    { 
        timestamps: true 
    }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;