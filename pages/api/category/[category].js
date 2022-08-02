import { client } from "../../../lib/client";
import { categoryFeedsQuery } from "../../../utils/queries";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { category } = req.query;

    const categoryQuery = categoryFeedsQuery(category);

    const products = await client.fetch(categoryQuery);

    res.status(200).json(products);
  }
}
