/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./public/*.{html,js}",
    "./public/**/*.{html,js}",
    "./components/*.{html,js}",
    "./components/*.{html,js}",
    "./*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'sx': '475px',
      'ss': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        truwinblue: {
          50: '#B9C2DA',
          100: '#95A4CB',
          300: '#7B8EBE',
          500: '#5370BB',
          700: '#2B50AF',
          900: '#133EAC',
        },
        truwingold: {
          50: '#E5E2DA',
          100: '#DFD3BC',
          300: '#D9C8A7',
          500: '#D6C095',
          700: '#CFB47D',
          900: '#C3A15B',
        },
        softblue: {
          primary: '#F3F4F6' 
        },
        truwingray: {
          primary: '#C3C8D3'
        },
        truwinteal: {
          primary: '#4AD2D2' 
        },
        truwindarkblue: {
          primary: '#0A2337'
        },
        truwincream: {
          primary: '#FFFCF6'
        },
        truwinsoftblue: {
          primary: '#F3F4F6'
        },
    },
    fontFamily: {
      graphik: ['Graphik', 'sans-serif'],
      graphikBold: ['Graphik_Bold', 'sans-serif'],
      graphikSuper: ['Graphik_Super', 'sans-serif'],
      graphikMeduim: ['Graphik_Meduim', 'sans-serif'],
      graphikSemibold: ['Graphik_Semibold', 'sans-serif'],
      graphikLight: ['Graphik_Light', 'sans-serif'],
      cigar: ['Cigar'],
      cigarBold: ['Cigar_bold', 'serif'],
      cigarSemibold: ['Cigar_Semibold', 'serif'],
      cigarLight: ['Cigar_Light', 'serif'],
      cigarStrong: ['Cigar_Strong', 'serif'],
    },
    }
  },
  plugins: [

  ],
}
