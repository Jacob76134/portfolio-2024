import { defineField, defineType } from 'sanity';
import { accessibleImage } from './objects/accessibleImage';

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [{ type: 'sectionSelection' }],
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
    ],
})
