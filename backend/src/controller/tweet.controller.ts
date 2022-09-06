import { Request, Response } from "express";
import { CreateTweetInput } from "schema/tweet.schema";
import { createTweet, getTweets } from '../service/tweet.service'
import logger from '../utils/logger'


export async function createTweetHandler(req: Request<{}, {}, CreateTweetInput["body"]>, res: Response) {
    try {
        const tweet = await createTweet(req.body)
        return res.status(200).send(tweet);
    } catch (error: any) {
        logger.error(error);
        return res.status(409).send(error.message);
    }
}

export async function getTweetsHandler(req: Request, res: Response) {
    try {
        const tweets = await getTweets();
        var array = Object.keys(tweets)
            .map(function(key: any) {
                return tweets[key];
            });
        return res.status(200).send(array);
    } catch (error: any) {
        logger.error(error);
        return res.status(409).send(error.message);
    }
}

