module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: "#root",
    theme: {
        colors: { 
            green:{
                50: "#00b37e",
                100: "#00875f",
            },
            gray: {
              50: "#e1e1e6",
              100: "#c4c4cc",
              200: "#8d8d99",
              300: "#7c7c8a",
              400: "#323238",
              500: "#202024",
              600: "#121214",
            },
            white: "#ffffff",
            red: "#f75a68"
        },
        extend: {
            maxHeight: {
                none: "none",
            }
        },
    },
    corePlugins: {
        // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
        preflight: true,
    },
    plugins: [],
};
