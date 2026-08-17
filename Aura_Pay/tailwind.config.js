/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050816',
        'bg-secondary': '#0A1023',
        'bg-tertiary': '#111827',
        'card-primary': '#111B2F',
        'card-secondary': '#18243C',
        'aura-blue': '#3B82F6',
        'aura-indigo': '#6366F1',
        'aura-purple': '#8B5CF6',
        'aura-success': '#22C55E',
        'aura-warning': '#F59E0B',
        'aura-error': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-aura': 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)',
        'gradient-card': 'linear-gradient(135deg, #111B2F, #18243C)',
        'gradient-hero': 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15) 0%, rgba(5,8,22,0) 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(99,102,241,0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(99,102,241,0.8)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.3)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.3)',
        'glow-indigo': '0 0 30px rgba(99,102,241,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(99,102,241,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderColor: {
        'glass': 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
