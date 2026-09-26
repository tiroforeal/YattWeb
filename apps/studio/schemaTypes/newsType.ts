import { defineType, defineField } from 'sanity';

export const newsType = defineType({
    name: 'news',
    title: 'News & Announcements',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Headline',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'content',
            title: 'Article Content',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }], // Rich text editor with image uploads
        }),
    ],
});