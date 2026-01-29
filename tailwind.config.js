/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Menambahkan warna lime khas Swara Visual
                brandLime: "#CCFF00",
            },
        },
    },
    plugins: [],
};
