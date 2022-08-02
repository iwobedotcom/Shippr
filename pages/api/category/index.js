import { client } from "../../../lib/client";
import { categoryFeedsQuery } from "../../../utils/queries";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = categoryFeedsQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  }
}
