import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Feature Image",
      name: "image",
      type: "image",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "string",
    }),
  ],
});
