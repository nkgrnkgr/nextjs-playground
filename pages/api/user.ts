import { NextApiRequest, NextApiResponse } from "next";

// Fake users data
const users = [
  { id: 4, name: "user04" },
  { id: 5, name: "user05" },
  { id: 6, name: "user06" },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { id } = _req.query;

  const user = users.find((user) => user.id === Number(id));

  res.status(200).json(user);
}
