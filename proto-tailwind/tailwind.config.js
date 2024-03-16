/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind watch command
// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch