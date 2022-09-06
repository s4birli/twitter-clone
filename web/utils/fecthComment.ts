import { Comment } from "../typings";

export const fetchComment = async (tweetId: string) => {
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`);
    const data = await res.json();
    const comment: Comment[] = data.comments;
    return comment;
}