import { NextApiRequest, NextApiResponse } from "next";
import { evaluateCase } from "../../lib/veritasCaseEngine";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const result = evaluateCase(req.body);
  res.status(200).json(result);
}
