import { omit } from "lodash";
import  TweetModel, { TweetInput } from '../models/tweet.model'

export async function createTweet(input: TweetInput){
    try {
        const tweet = await TweetModel.create(input)
        return omit(tweet.toJSON());
    } catch (error: any) {
        throw new Error(error)
    }
}