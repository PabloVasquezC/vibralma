import { defineType, defineField } from 'sanity'

export const activityType = defineType({
    name: 'activityType',
    title: 'Actividades',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
        defineField({
            name: 'image',  
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})