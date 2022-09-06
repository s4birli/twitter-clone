import { omit } from "lodash";
import  CommentModel, { CommentInput } from '../models/comment.model'

export async function createComment(input: CommentInput){
    try {
        const comment = await CommentModel.create(input)
        return omit(comment.toJSON());
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getComments(){
    try {
        const comments = await CommentModel.find()
        return omit(comments);
    } catch (error: any) {
        throw new Error(error)
    }
}