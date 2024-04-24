import { defineField } from 'sanity';
import { HeroSelector } from './heroSections';
import { CTASelector } from './CTASections';

export const sectionSelection = {
    name: 'sectionSelection',
    title: 'Section Selection',
    type: 'object',
    fields: [
        // Select a section type
        defineField({
            name: 'section',
            title: 'Section',
            type: 'string',
            options: {
                list: [
                    { title: 'Hero', value: 'hero' },
                    { title: 'CTA', value: 'cta' },
                    { title: 'Image with Text', value: 'imageWithText' },
                    { title: 'Plain Text', value: 'planeText' },
                    { title: 'Blog', value: 'blog' },
                    { title: 'Video', value: 'video' },
                ],
                direction: 'vertical'
            },
        }),

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'button',
            title: 'Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Text',
                    type: 'string',
                }),
                defineField({
                    name: 'link',
                    title: 'Link',
                    type: 'string',
                }),
                defineField({
                    name: 'variant',
                    title: 'Variant',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Primary', value: 'primary' },
                            { title: 'Secondary', value: 'secondary' },
                            { title: 'Dark', value: 'dark' },
                            { title: 'Light', value: 'light' },
                            { title: 'Clear', value: 'clear' },
                        ]
                    }
                }),
            ],
        }),
    
        defineField({
            name: 'button2',
            title: 'Button 2',
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Text',
                    type: 'string',
                }),
                defineField({
                    name: 'link',
                    title: 'Link',
                    type: 'string',
                }),
                defineField({
                    name: 'variant',
                    title: 'Variant',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Primary', value: 'primary' },
                            { title: 'Secondary', value: 'secondary' },
                            { title: 'Dark', value: 'dark' },
                            { title: 'Light', value: 'light' },
                            { title: 'Clear', value: 'clear' },
                        ]
                    }
                }),
            ],
        }),

        // Provide Hero Information
        ...HeroSelector,

        // Choose a CTA
        CTASelector,
    ],
};