import { Express, Request, Response } from "express";
import { createTweetHandler } from "./controller/tweet.controller";
import { createCommentHandler } from "./controller/comment.controller";
import validateResource from "./middleware/validateResource";
import { createTweetSchema } from "./schema/tweet.schema"
import { createCommentSchema } from "./schema/comment.schema"

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => { res.sendStatus(200) })

    app.post("/api/tweet", validateResource(createTweetSchema), createTweetHandler)
    app.post("/api/comment", validateResource(createCommentSchema), createCommentHandler)
}

export default routes