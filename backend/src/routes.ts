import { Express, Request, Response } from "express";
import { createTweet } from "service/tweet.service";
import { createTweetHandler } from "./controller/tweet.controller";
import validateResource from "./middleware/validateResource";
import { createTweetSchema } from "./schema/tweet.schema"

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => { res.sendStatus(200) })

    app.post("/api/tweet", validateResource(createTweetSchema), createTweetHandler)
}

export default routes