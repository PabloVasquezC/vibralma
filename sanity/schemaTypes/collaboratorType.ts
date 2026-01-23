import { defineType, defineField } from 'sanity'

export const collaboratorType = defineType({
    name: 'collaboratorType',
    title: 'Collaborator Type',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'specialty',
            title: 'Specialty',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})