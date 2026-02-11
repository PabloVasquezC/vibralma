import { defineType, defineField } from 'sanity'

export const collaboratorType = defineType({
    name: 'collaboratorType',
    title: 'Colaboradores',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Ubicación',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'specialty',
            title: 'Especialidad',
            type: 'string',
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