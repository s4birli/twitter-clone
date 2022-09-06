import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment } from '../../typings.d'
import axios from "axios"

type Data = {
  comments: Comment[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const comments: Comment[] = await (await axios.get("http://localhost:12345/api/tweets")).data;
    res.status(200).json({ comments })
}
