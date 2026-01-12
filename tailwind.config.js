export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#fff5ed",
                    100: "#ffe8d6",
                    200: "#ffd1ad",
                    300: "#ffb078",
                    400: "#ff914d",
                    500: "#f9932d",
                    600: "#f56e25",
                    700: "#c94e10",
                    800: "#9f3d10",
                    900: "#7e340e",
                    950: "#451805",
                }
            },
            fontFamily: {
                sans: ['var(--font-poppins)', 'sans-serif'],
            }
        },
    },
    plugins: [],
};