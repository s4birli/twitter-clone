import type { NextApiRequest, NextApiResponse } from 'next'
import { Tweet } from '../../typings.d'
import axios from "axios"

type Data = {
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const tweets: Tweet[] = await (await axios.get("http://localhost:12345/api/tweets")).data;
    res.status(200).json({ tweets })
}
