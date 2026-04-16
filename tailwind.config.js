/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4efe4',
        paperDeep: '#ece6d8',
        ink: '#1a1714',
        muted: '#6b635a',
        rule: '#d9d2c2',
        accent: '#1d4ed8',
      },
      fontFamily: {
        mono: ['"Google Sans Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        column: '42rem',
      },
    },
  },
  plugins: [],
}
