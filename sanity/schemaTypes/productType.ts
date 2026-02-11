
import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Producto',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtítulo',
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
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ]
        }),
        defineField({
            name: 'tags',
            title: 'Etiquetas',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
