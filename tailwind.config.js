// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          showContnt: {
            'from': {transform: 'translateY(50px)', filter: 'blur(30px)'},
            'to': {transform: 'translateY(0)', filter: 'blur(0)', opacity: 1},
          },
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          // Define your custom animation names
          showContent: 'showContnt 0.8s 0.8s ease-in-out infinite',
          spin: 'spin 2s linear infinite',
        },
      },
    },
    plugins: [],
  }
  