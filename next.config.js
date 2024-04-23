/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', 'tailwindui.com'],
    },

    // UPDATE THE RESEND_API_KEY WITH YOUR OWN API KEY https://resend.com/api-keys
    // ADD IT TO YOUR .env.local FILE
    // DOCUMENT YOUR CREATED API KEY https://j2marketing.teamwork.com/spaces/web-sops/page/23926-resend-client-api-keys
    env: {
        RESEND_API_KEY: "re_U4SiucN4_HcNqTWjRPeMX4qaA2XGMgAC4",
    },
}

module.exports = nextConfig
