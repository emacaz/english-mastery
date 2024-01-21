/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-background': "url(/src/images/hero-img.png)",
                'contact-us': "url(/src/images/contact-us-img.png)"
            }
        },
    },
    plugins: [],
};
