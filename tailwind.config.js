module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.5rem', { lineHeight: '1rem' }],
      },
      colors: {
        pippen: {
          blue: '#428bca',
          green: '#45b25d',
          gray: '#f6f6f6',
        },
      },
      spacing: {
        px: '1px',
        26: '6.5rem',
      },
    },
  },
  plugins: [],
}
