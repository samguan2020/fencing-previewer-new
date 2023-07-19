import {z} from 'zod'

import {FileAsset, ImageAsset, defineField, defineType} from 'sanity'

// export const Video = z.object({
//   _id: z.string(),
//   title: z.string(),
//   description: z.string(),
//   mainImage: z.object({
//     _ref: z.string(),
//     asset: z.object({
//       url: z.string(),
//       lqip: z.string().optional(),
//       dominant: z
//         .object({
//           background: z.string(),
//           foreground: z.string(),
//         })
//         .optional(),
//     }),
//   }),
//   video: z.object({
//     _ref: z.string(),
//     asset: z.any(),
//   }),
//   publishedAt: z.string(),
// })

export interface Video {
  _type: 'video'
  _id: string
  _createdAt: string
  title?: string
  description?: string
  mainImage?: ImageAsset
  video?: FileAsset
}

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
