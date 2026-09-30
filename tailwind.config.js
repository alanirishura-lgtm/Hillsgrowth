/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './pages/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EC', ink: '#1B241E', forest: '#1F5F3D', green: '#2E8B57', gold: '#B8912E', 'gold-soft': '#E7C878', sage: '#E4EEE7', muted: '#5B655D', line: '#DCD5C4'
      },
      fontFamily: {display: ['Fraunces','serif'], sans: ['Inter','sans-serif']},
      maxWidth: {site: '1340px'}
    }
  }, plugins: []
}
