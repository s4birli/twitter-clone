import { object, string, boolean, TypeOf } from 'zod'

export const createCommentSchema = object({
    body: object({
        comment: string({ required_error: 'Comment is required' }).max(140, 'Maximun 140 characters is allowed'),
        username: string({ required_error: 'UserName is required' }),
        profileImg: string({ required_error: 'Profile Image is required' }),
        tweetId: string({ required_error: 'TweetId is required' }),
        blockComment: boolean({ required_error: 'Is it deleted?' }),
    })
})

export type CreateCommentInput = TypeOf<typeof createCommentSchema>