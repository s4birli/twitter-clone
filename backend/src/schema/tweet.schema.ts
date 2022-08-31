import { object, string, boolean, TypeOf } from 'zod'

export const createTweetSchema = object({
    body: object({
        text: string({ required_error: 'Tweet is required' }).max(140, 'Maximun 140 characters is allowed'),
        username: string({ required_error: 'UserName is required' }),
        profileImg: string({ required_error: 'Profile Image is required' }),
        image: string({ required_error: 'Image is required' }),
        blockTweet: boolean({ required_error: 'Is it blocked?' }),
    })
})

export type CreateTweetInput = TypeOf<typeof createTweetSchema>