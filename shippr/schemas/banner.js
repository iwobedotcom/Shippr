export default {
  name: "banner",
  title: "Banner",
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
      name: "details",
      title: "Details",
      type: "string",
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
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
  ],
};
