import { Request, Response } from "express";
import { CreateCommentInput } from "schema/comment.schema";
import { createComment, getComments } from '../service/comment.service'
import logger from '../utils/logger'


export async function createCommentHandler(req: Request<{}, {}, CreateCommentInput["body"]>, res: Response) {
    try {
        const comment = await createComment(req.body)
        return res.send(comment);
    } catch (error: any) {
        logger.error(error);
        return res.status(409).send(error.message);
    }
}

export async function getCommentsHandler(req: Request, res: Response) {
    try {
        const comments = await getComments()
        return res.send(comments);
    } catch (error: any) {
        logger.error(error);
        return res.status(409).send(error.message);
    }
}

