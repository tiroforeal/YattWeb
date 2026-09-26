import { defineType, defineField } from 'sanity';

export const activityType = defineType({
    name: 'activity',
    title: 'Club Activity',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Activity Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
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
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Activity Photo',
            type: 'image',
            options: {
                hotspot: true, // Enables visual cropping in Sanity Studio
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),
    ],
});