/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* warm-gray-200 */
        input: "var(--color-input)", /* subtle-cream */
        ring: "var(--color-ring)", /* warm-gold */
        background: "var(--color-background)", /* warm-white */
        foreground: "var(--color-foreground)", /* rich-brown */
        primary: {
          DEFAULT: "var(--color-primary)", /* warm-gold */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* soft-blush */
          foreground: "var(--color-secondary-foreground)", /* rich-brown */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* soft-burgundy */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* soft-blush */
          foreground: "var(--color-muted-foreground)", /* warm-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* deep-rose */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* warm-white */
          foreground: "var(--color-popover-foreground)", /* rich-brown */
        },
        card: {
          DEFAULT: "var(--color-card)", /* subtle-cream */
          foreground: "var(--color-card-foreground)", /* rich-brown */
        },
        success: {
          DEFAULT: "var(--color-success)", /* natural-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* gentle-amber */
          foreground: "var(--color-warning-foreground)", /* rich-brown */
        },
        error: {
          DEFAULT: "var(--color-error)", /* soft-burgundy */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], /* elegant-serif */
        body: ['Inter', 'sans-serif'], /* clean-sans-serif */
        accent: ['Dancing Script', 'cursive'], /* handwritten-elegance */
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 13px */
        'md': 'var(--spacing-md)', /* 21px */
        'lg': 'var(--spacing-lg)', /* 34px */
        'xl': 'var(--spacing-xl)', /* 55px */
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'card': 'var(--shadow-card)',
        'button': 'var(--shadow-button)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "text-reveal": "text-reveal 0.8s ease-out",
        "countdown-pulse": "countdown-pulse 2s ease-in-out infinite",
        "heart-float": "heart-float 1.5s ease-out forwards",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "text-reveal": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "countdown-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "heart-float": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-20px) scale(1.2)", opacity: "0" },
        },
      },
      aspectRatio: {
        'cinematic': '21/9',
      },
      backdropBlur: {
        'xl': '20px',
      },
      transitionTimingFunction: {
        'romantic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '800': '800ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}