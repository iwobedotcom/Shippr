import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import product from "./product";
import banner from "./banner";
import category from "./category";
import promo from "./promo";
import bestseller from "./bestseller";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([product, banner, category, promo, bestseller]),
});
