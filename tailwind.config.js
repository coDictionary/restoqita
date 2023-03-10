/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',"./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ]
}
