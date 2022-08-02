import { client } from "../../../lib/client";
import { searchCategoryQuery } from "../../../utils/queries";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { searchValue } = req.query;

    const searchQuery = searchCategoryQuery(searchValue);

    const products = await client.fetch(searchQuery);

    res.status(200).json(products);
  }
}
