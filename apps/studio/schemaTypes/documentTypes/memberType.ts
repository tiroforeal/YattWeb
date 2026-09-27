import { defineType, defineField } from 'sanity'

export const memberType = defineType({
    name: 'memberType',
    title: 'Club Member / Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Club Role / Position',
            type: 'string',
            placeholder: 'e.g., Trail Leader, Editor, President',
        }),
        defineField({
            name: 'avatar',
            title: 'Profile Photo / Icon',
            type: 'image',
            options: {
                hotspot: true, // Enables visual cropping in Sanity Studio
            },
        }),
        // Optional Sanity User ID Field for authorship auto-match in Sanity editor
    ],
    preview: {
        select: {
            title: 'name',
            position: 'role',
            icon: 'avatar',
        },
        prepare({ title, position, icon }) {
            return {
                title,
                subtitle: position,
                media: icon,
            }
        }
    }
})