import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react")
const plugin = require('tailwindcss/plugin')

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary': '#eb4034',
                'secondary': '#e89b27',
                'dark': '#171514',
                'light': '#f7f4f0'
            }
        },
    },
    darkMode: "class",
    plugins: [
        plugin(function({ addComponents }:any) {
            addComponents({
                '.btn': { // Example with breakpoints
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                    backgroundColor: 'red',
                    '@screen sm': {
                        backgroundColor: 'blue',
                    },
                }
            })
        }),
        nextui(),
    ]
}
export default config
