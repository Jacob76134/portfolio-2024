import { defineField, defineType } from "sanity";

export const accessibleImage = defineType({
    name: 'accessibleImage',
    title: 'Accessible Image',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'A short description of what is in the image',
            hidden: ({ parent }) => !parent?.image.asset,
            validation: Rule => [ Rule.required() ],
        }),
        defineField({
            name: 'caption',
            type: 'string',
            title: 'Caption',
            description: 'A more detailed description of what is in the image',
            hidden: ({ parent }) => !parent?.image.asset,
        }),
    ]
})