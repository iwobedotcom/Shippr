export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "availability",
      title: "Availability",
      type: "string",
      options: {
        list: [
          { title: "In Stock", value: "In Stock" },
          { title: "Not Available", value: "Not Available" },
        ],
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "string",
      options: {
        list: [
          { title: "One Star Rating", value: "one-star-rating" },
          { title: "Two Stars Rating", value: "two-stars-rating" },
          { title: "Three Stars Rating", value: "three-stars-rating" },
          { title: "Four Stars Rating", value: "four-stars-rating" },
          { title: "Five Stars Rating", value: "five-stars-rating" },
        ],
      },
    },
    {
      name: "numReviews",
      title: "NumReviews",
      type: "number",
    },
  ],
};
