import { defineType, defineField } from 'sanity';

export const galleryType = defineType({
    name: 'galleryType',
    title: 'Photo Gallery',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Gallery Title',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Gallery Images',
            type: 'array',
            of: [{
                type: 'image',
                options: { hotspot: true }, // Enables visual cropping in Sanity Studio
                fields: [
                    { name: 'caption', title: 'Caption', type: 'string' },
                    { name: 'alt', title: 'Alt Text', type: 'string' },
                ],
            }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            images: 'images',
        },
        prepare({ title, images }) {
            const list = Object.values(images ?? {}).filter(Boolean) as any[];
            const count = list.length;

            return {
                title: title || 'Untitled Gallery',
                subtitle: `${count} image${count === 1 ? '' : 's'}`,
                media: count > 0 ? list[0] : undefined,
            };
        },
    },
});