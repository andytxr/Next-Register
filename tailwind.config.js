module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsw,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx'
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/
      
    ]
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants:{
    extend: {},
  },
  plugins: []
}
