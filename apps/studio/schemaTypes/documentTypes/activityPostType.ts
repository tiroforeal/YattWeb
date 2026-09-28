import { defineType, defineField } from 'sanity';

export const activityPostType = defineType({
    name: 'activityPostType',
    title: 'Club Activity Post',
    type: 'document',
    fields: [
        // --- 1. CARD & FEED DISPLAY FIELDS ---
        defineField({
            name: 'title',
            title: 'Activity Post Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Path (Slug)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'eventDate',
            title: 'Event Date & Time',
            type: 'datetime',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main / Thumbnail Photo',
            type: 'image',
            options: {
                hotspot: true, // Enables visual cropping in Sanity Studio
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Short Excerpt / Summary',
            type: 'text',
            rows: 2,
            description: 'Brief summary displayed on the activities card preview.',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),

        // --- 2. AUTHOR & PARTICIPANTS REFERENCES ---
        defineField({
            name: 'author',
            title: 'Publisher / Author',
            type: 'reference',
            to: [{ type: 'memberType'}],
            description: 'Who created/published this post',
        }),
        defineField({
            name: 'attendees',
            title: 'Club Participants',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'memberType'}] }],
            description: 'Add members who attended this activities or event',
        }),

        // --- 3. DEDICATED PAGE BODY (BLOCK CONTENT) ---
        defineField({
            name: 'body',
            title: 'Activity Post Body Content',
            type: 'array',
            of: [
                { type: 'block' },      // Standard rich text block
                { type: 'image',        // Image block with cropping
                    options: { hotspot: true },
                    fields: [
                        { name: 'caption',type: 'string' },
                        { name: 'alt', type: 'string' },
                    ] }, // Image block with cropping
                { type: 'galleryType' },    // Custom galleryType object
                { type: 'videoEmbedType' }, // Custom video embed object
            ],
        })
    ],
});