export default {
  name: "promo",
  title: "Promo",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
    {
      name: "smallText",
      title: "SmallText",
      type: "string",
    },
  ],
};
