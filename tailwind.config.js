/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        // Premium Color Palette
        primary: {
          50: '#f0f7ff',
          100: '#e0ecff',
          200: '#c7dcff',
          300: '#a4c7ff',
          400: '#7ba7ff',
          500: '#5aa8d6',
          600: '#3066be',
          700: '#1a3a8a',
          800: '#162e4d',
          900: '#0f1e33',
        },
        luxury: {
          dark: '#02000d',
          darker: '#050939',
          glass: 'rgba(10, 14, 26, 0.7)',
          border: '#1a1f35',
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scan': 'scan 3s ease-in-out infinite',
        'aurora': 'aurora 6s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
        'blur-in': 'blur-in 1s ease-out',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(90, 168, 214, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(90, 168, 214, 0.6)' },
        },
        'slideInRight': {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'aurora': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neon-glow': {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(90, 168, 214, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)',
            color: 'rgba(255, 255, 255, 1)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(90, 168, 214, 0.8), 0 0 40px rgba(0, 191, 255, 0.6)',
            color: 'rgba(255, 255, 255, 0.95)'
          },
        },
        'blur-in': {
          'from': { opacity: '0', filter: 'blur(10px)' },
          'to': { opacity: '1', filter: 'blur(0px)' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(90, 168, 214, 0.7)',
          },
          '70%': {
            boxShadow: '0 0 0 20px rgba(90, 168, 214, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(90, 168, 214, 0)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'luxury': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.5)',
        'luxury-xl': '0 30px 90px rgba(0, 0, 0, 0.6)',
        'glow-blue': '0 0 30px rgba(90, 168, 214, 0.4)',
        'glow-blue-lg': '0 0 60px rgba(90, 168, 214, 0.6)',
        'glow-cyan': '0 0 40px rgba(0, 191, 255, 0.4)',
        'glow-cyan-lg': '0 0 80px rgba(0, 191, 255, 0.6)',
        'neon-blue': '0 0 20px rgba(48, 102, 190, 0.8), inset 0 0 20px rgba(90, 168, 214, 0.1)',
        'neon-cyan': '0 0 30px rgba(0, 191, 255, 0.8), inset 0 0 20px rgba(0, 191, 255, 0.1)',
        'neo-brutalist': '8px 8px 0px rgba(48, 102, 190, 0.3)',
        'premium-depth': '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}