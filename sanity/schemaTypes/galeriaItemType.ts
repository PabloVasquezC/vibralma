import { defineField, defineType } from 'sanity'

export const galeriaItemType = defineType({
    name: 'galeriaItemType',
    title: 'Galeria',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'title',
            title: 'Titulo',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
    ],
})