export interface Tweet extends TweetBody {
    _id: string;
    createdAt: string;
    updatedAt: string;
    blockTweet: boolean; 
}

export type TweetBody = {
    text: string;
    username: string;
    profileImg: string;
    image?: string;
}