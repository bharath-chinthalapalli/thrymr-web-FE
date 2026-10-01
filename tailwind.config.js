module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
 
  screens: {
    sm: "320px",
    md: "480px",
    lg: "768px",
    xl: "976px",
    xxl: "1540px",
  },
},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     container: {
//       padding: "2rem",
//       center: true,
//     },
//     screens: {
//       sm: "320px",
//       md: "480px",
//       lg: "768px",
//       xl: "976px",
//       xxl: "1540px",
//     },
//     borderColor: theme => ({

//       ...theme("colors"),
      
//       DEFAULT: theme("colors.gray.300", "currentColor"),
      
//       primary: "#a4de02",
      
//       }),

//     extend: {
//       greenColor: "#A4DE02",
//     },
//   },
//   variants: {
//     extend: {
//       animation: ["hover", "focus"],
//     },
//   },
//   plugins: [],
// }
