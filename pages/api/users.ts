import { NextApiRequest, NextApiResponse } from "next";

// Fake users data
const users = [{ id: 4 }, { id: 5 }, { id: 6 }];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(users);
}
