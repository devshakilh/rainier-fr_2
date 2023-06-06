/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E1649",
                secondary: "#00C0FF",
            },
            borderRadius: {
                full: "50%",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#1E1649",

                    secondary: "#00C0FF",
                },
            },
        ],
    },
};
