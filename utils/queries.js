export function searchCategoryQuery(searchValue) {
  const query = `*[_type == "product" && name match "${searchValue}*" || category match "${searchValue}*"]{
    image[0] {
      asset -> {
        url
      }
    },
    _id,
    name,
    slug,
    category,
    price
  }`;

  return query;
}

export function categoryFeedsQuery() {
  const query = `*[_type == "product"] | order(_createAt desc) {
        image[0] {
          asset -> {
            url
          }
        },
        _id,
        name,
        slug,
        category,
        price,
        rating
      }`;

  return query;
}
