export default {
  name: "category",
  title: "Category",
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
      name: "smallText",
      title: "SmallText",
      type: "string",
    },
    {
      name: "largeText",
      title: "LargeText",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
  ],
};
