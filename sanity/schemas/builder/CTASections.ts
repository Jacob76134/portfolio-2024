import { defineField } from "sanity";

export const CTASelector = 
    defineField({
        name: 'ctaType',
        title: 'CTA Type',
        type: 'string',
        options: {
            list: [
                { title: 'CTA 1', value: 'cta1' },
                { title: 'CTA 2', value: 'cta2' },
                { title: 'CTA 3', value: 'cta3' },
            ],
        },
        hidden: ({ parent }) => parent?.section !== 'cta',
    })