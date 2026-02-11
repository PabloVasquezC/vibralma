import { defineType, defineField } from 'sanity'

export const serviceType = defineType({
    name: 'serviceType',
    title: 'Servicios',
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
            type: 'strin    g',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Icon (Emoji)',
            type: 'string',
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