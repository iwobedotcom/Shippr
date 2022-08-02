import { client } from "../../../lib/client";
import { categoryFeedsQuery } from "../../../utils/queries";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { rating } = req.query;

    const ratingQuery = categoryFeedsQuery(rating);

    const products = await client.fetch(ratingQuery);

    res.status(200).json(products);
  }
}
