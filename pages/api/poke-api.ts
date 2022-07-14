import { NextApiRequest, NextApiResponse } from "next";

const users = [{ id: 4 }, { id: 5 }, { id: 6 }];
const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/10", {
    headers: {
      lang: "ja",
    },
  });

  const data = await response.json();

  res.status(200).json(data);
};

export default handler;
