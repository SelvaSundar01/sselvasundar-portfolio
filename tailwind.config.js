/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          '0%': { color: '#f59e0b' }, // Yellow
          '25%': { color: '#ef4444' }, // Red
          '50%': { color: '#3b82f6' }, // Blue
          '75%': { color: '#10b981' }, // Green
          '100%': { color: '#f59e0b' }, // Back to Yellow
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
      },
      

      },
      animation: {
        colorCycle: 'colorCycle 1s linear infinite',
        breathe: 'breathe 3s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
        spinSlow: 'spinSlow 3s linear 1',
        shine: 'shine 3s linear infinite',
        
      },
      keyframes:{
        breathe:{
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-2%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
      },
    
      }
    },
  },
  plugins: [],
};
