import { Express, Request, Response } from "express";
import { createTweetHandler, getTweetsHandler } from "./controller/tweet.controller";
import { createCommentHandler, getCommentsHandler } from "./controller/comment.controller";
import validateResource from "./middleware/validateResource";
import { createTweetSchema } from "./schema/tweet.schema"
import { createCommentSchema } from "./schema/comment.schema"

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => { res.sendStatus(200) })

    app.post("/api/tweet", validateResource(createTweetSchema), createTweetHandler)
    app.get("/api/tweets", getTweetsHandler)
    app.post("/api/comment", validateResource(createCommentSchema), createCommentHandler)
    app.get("/api/comments", getCommentsHandler)
    
}

export default routes