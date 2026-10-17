/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brass: {
          400: 'rgb(200 147 58)',
          500: 'rgb(176 125 46)',
          600: 'rgb(143 100 37)',
        },
        ink: {
          100: 'rgb(232 229 223)',
          200: 'rgb(209 203 192)',
          300: 'rgb(172 163 151)',
          400: 'rgb(125 114 102)',
          500: 'rgb(92 83 73)',
          600: 'rgb(69 63 56)',
          700: 'rgb(51 46 41)',
          800: 'rgb(34 31 27)',
          900: 'rgb(23 20 15)',
        },
        paper: {
          DEFAULT: 'rgb(250 248 243)',
        },
        rust: {
          500: 'rgb(184 89 60)',
          600: 'rgb(149 69 44)',
        },
        sage: {
          500: 'rgb(92 138 73)',
          600: 'rgb(71 108 56)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Public Sans', 'system-ui', 'sans-serif'],
        ledger: ['IBM Plex Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
