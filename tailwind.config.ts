import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "hsl(10, 48%, 15%)", // Deep Brown
                    light: "hsl(10, 48%, 25%)",
                    dark: "hsl(10, 48%, 10%)",
                },
                accent: {
                    DEFAULT: "hsl(34, 44%, 59%)", // Camel Brown
                    light: "hsl(34, 44%, 69%)",
                    dark: "hsl(34, 44%, 49%)",
                },
                growth: {
                    DEFAULT: "hsl(142, 76%, 36%)", // Growth Green
                    light: "hsl(142, 76%, 46%)",
                    dark: "hsl(142, 76%, 26%)",
                },
                background: "hsl(0, 0%, 100%)",
                foreground: "hsl(0, 0%, 15%)",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            borderRadius: {
                lg: "1rem",
                xl: "1.5rem",
                "2xl": "2rem",
                "3xl": "3rem",
            },
        },
    },
    plugins: [],
};
export default config;
