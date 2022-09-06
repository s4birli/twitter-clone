import { omit } from "lodash";
import  TweetModel, { TweetInput } from '../models/tweet.model'
import logger from "../utils/logger"

export async function createTweet(input: TweetInput){
    try {
        const tweet = await TweetModel.create(input)
        return omit(tweet.toJSON());
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getTweets(){
    try {
        const tweet = await TweetModel.find({ blockTweet: false }).sort({ createdAt: -1});
        return omit(tweet);
    } catch (error: any) {
        throw new Error(error)
    }
}

