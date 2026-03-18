/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                '4k': '2560px',
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};