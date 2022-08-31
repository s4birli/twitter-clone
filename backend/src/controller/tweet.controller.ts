import { Request, Response } from "express";
import { CreateTweetInput } from "schema/tweet.schema";
import { createTweet } from '../service/tweet.service'
import logger from '../utils/logger'


export async function createTweetHandler(req: Request<{}, {}, CreateTweetInput["body"]>, res: Response) {
    try {
        const tweet = await createTweet(req.body)
        return res.send(tweet);
    } catch (error: any) {
        logger.error(error);
        return res.status(409).send(error.message);
    }
}

