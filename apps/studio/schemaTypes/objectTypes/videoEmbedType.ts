import { defineType, defineField } from 'sanity';

export const videoEmbedType = defineType({
    name: 'videoEmbedType',
    title: 'Video Embed (Drive / Direct Link)',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            title: 'Video URL or Drive Share Link',
            type: 'url',
            description: 'Paste a Google Drive share link (e.g. https://drive.google.com/file/d/XYZ/view), or direct video link.',
            validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https'],
            }),
        }),
        defineField({
            name: 'caption',
            title: 'Caption / Description',
            type: 'string',
            description: 'Optional caption or description for the video.',
        })
    ],
});