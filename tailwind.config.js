const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

// see https://github.com/tailwindlabs/tailwindcss/blob/v3.3.3/stubs/config.full.js
// for reference config
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.story.{js,ts,jsx,tsx}',
    './src/**/*.svg',
    './.storybook/*.{js,ts}',
  ],
  safelist: [
    { pattern: /^tw-bg-gray-\d+$/ },
  ],
  prefix: 'tw-',
  important: false,
  separator: ':',
  darkMode: 'media',
  theme: {
    supports: {},
    data: {},
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1920px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,

      key: {
        1: 'hsl(var(--ec-key-color-level-1))',
        2: 'hsl(var(--ec-key-color-level-2))',
        3: 'hsl(var(--ec-key-color-level-3))',
        4: 'hsl(var(--ec-key-color-level-4))',
        5: 'hsl(var(--ec-key-color-level-5))',
        6: 'hsl(var(--ec-key-color-level-6))',
        7: 'hsl(var(--ec-key-color-level-7))',
      },

      gray: {
        0: 'hsl(var(--ec-gray-color-level-0))',
        1: 'hsl(var(--ec-gray-color-level-1))',
        2: 'hsl(var(--ec-gray-color-level-2))',
        3: 'hsl(var(--ec-gray-color-level-3))',
        4: 'hsl(var(--ec-gray-color-level-4))',
        5: 'hsl(var(--ec-gray-color-level-5))',
        6: 'hsl(var(--ec-gray-color-level-6))',
        7: 'hsl(var(--ec-gray-color-level-7))',
        8: 'hsl(var(--ec-gray-color-level-8))',
      },

      complementary: {
        1: 'hsl(var(--ec-complementary-color-level-1))',
        2: 'hsl(var(--ec-complementary-color-level-2))',
      },

      additional: {
        18: 'hsl(var(--ec-additional-color-level-18))',
        51: 'hsl(var(--ec-additional-color-level-51))',
        64: 'hsl(var(--ec-additional-color-level-64))',
        140: 'hsl(var(--ec-additional-color-level-140))',
        166: 'hsl(var(--ec-additional-color-level-166))',
        215: 'hsl(var(--ec-additional-color-level-215))',
        266: 'hsl(var(--ec-additional-color-level-266))',
        280: 'hsl(var(--ec-additional-color-level-280))',
        297: 'hsl(var(--ec-additional-color-level-297))',
        325: 'hsl(var(--ec-additional-color-level-325))',
      },

      error: {
        DEFAULT: 'hsl(var(--ec-reserved-color-error))',
        dark: 'hsl(var(--ec-reserved-color-error-dark))',
        light: 'hsl(var(--ec-reserved-color-error-light))',
      },

      info: {
        DEFAULT: 'hsl(var(--ec-reserved-color-info))',
        dark: 'hsl(var(--ec-reserved-color-info-dark))',
        light: 'hsl(var(--ec-reserved-color-info-light))',
      },

      success: {
        DEFAULT: 'hsl(var(--ec-reserved-color-success))',
        dark: 'hsl(var(--ec-reserved-color-success-dark))',
        light: 'hsl(var(--ec-reserved-color-success-light))',
      },

      warning: {
        DEFAULT: 'hsl(var(--ec-reserved-color-warning))',
        dark: 'hsl(var(--ec-reserved-color-warning-dark))',
        light: 'hsl(var(--ec-reserved-color-warning-light))',
      },
    }),
    spacing: {
      // px: '1px',
      0: '0',
      1: '1px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      72: '72px',
      80: '80px',
      88: '88px',
      96: '96px',
      104: '104px',
    },
    // accentColor: ({ theme }) => ({
    //   ...theme('colors'),
    //   auto: 'auto',
    // }),
    // animation: {
    //   none: 'none',
    //   spin: 'spin 1s linear infinite',
    //   ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    //   pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    //   bounce: 'bounce 1s infinite',
    // },
    // aria: {
    //   busy: 'busy="true"',
    //   checked: 'checked="true"',
    //   disabled: 'disabled="true"',
    //   expanded: 'expanded="true"',
    //   hidden: 'hidden="true"',
    //   pressed: 'pressed="true"',
    //   readonly: 'readonly="true"',
    //   required: 'required="true"',
    //   selected: 'selected="true"',
    // },
    // aspectRatio: {
    //   auto: 'auto',
    //   square: '1 / 1',
    //   video: '16 / 9',
    // },
    // backdropBlur: ({ theme }) => theme('blur'),
    // backdropBrightness: ({ theme }) => theme('brightness'),
    // backdropContrast: ({ theme }) => theme('contrast'),
    // backdropGrayscale: ({ theme }) => theme('grayscale'),
    // backdropHueRotate: ({ theme }) => theme('hueRotate'),
    // backdropInvert: ({ theme }) => theme('invert'),
    // backdropOpacity: ({ theme }) => theme('opacity'),
    // backdropSaturate: ({ theme }) => theme('saturate'),
    // backdropSepia: ({ theme }) => theme('sepia'),
    // backgroundColor: ({ theme }) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-1': 'linear-gradient(132.46deg, theme(colors.complementary.2) 21.71%, theme(colors.key.4) 73.94%)',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    // backgroundOpacity: ({ theme }) => theme('opacity'),
    // backgroundPosition: {
    //   bottom: 'bottom',
    //   center: 'center',
    //   left: 'left',
    //   'left-bottom': 'left bottom',
    //   'left-top': 'left top',
    //   right: 'right',
    //   'right-bottom': 'right bottom',
    //   'right-top': 'right top',
    //   top: 'top',
    // },
    // backgroundSize: {
    //   auto: 'auto',
    //   cover: 'cover',
    //   contain: 'contain',
    // },
    blur: {
      4: '4px',
      // 0: '0',
      // none: '0',
      // sm: '4px',
      // DEFAULT: '8px',
      // md: '12px',
      // lg: '16px',
      // xl: '24px',
      // '2xl': '40px',
      // '3xl': '64px',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.level-4', 'currentColor'),
      // DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
    // borderOpacity: ({ theme }) => theme('opacity'),
    borderRadius: {
      none: '0',
      // none: '0px',
      sm: '2px',
      // sm: '0.125rem',
      DEFAULT: '5px',
      // DEFAULT: '0.25rem',
      button: '32px',
      '1/2': '50%',
      // md: '0.375rem',
      // lg: '0.5rem',
      // xl: '0.75rem',
      // '2xl': '1rem',
      // '3xl': '1.5rem',
      // full: '9999px',
    },
    // borderSpacing: ({ theme }) => ({
    //   ...theme('spacing'),
    // }),
    // borderWidth: {
    //   DEFAULT: '1px',
    //   0: '0px',
    //   2: '2px',
    //   4: '4px',
    //   8: '8px',
    // },
    boxShadow: {
      // sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      // DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      // md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      // lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      // xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      // '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      // inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
      'level-0': '0 2px 4px 0 hsla(0, 0%, 0%, 0.1)',
      'level-1': '0 3px 6px 0 hsla(0, 0%, 0%, 0.2)',
      'level-1-rtl': '-3px 0 6px 0 hsla(0, 0%, 0%, 0.2)',
      'level-2': '0 10px 20px 0 hsla(0, 0%, 0%, 0.2)',
    },
    // boxShadowColor: ({ theme }) => theme('colors'),
    // brightness: {
    //   0: '0',
    //   50: '.5',
    //   75: '.75',
    //   90: '.9',
    //   95: '.95',
    //   100: '1',
    //   105: '1.05',
    //   110: '1.1',
    //   125: '1.25',
    //   150: '1.5',
    //   200: '2',
    // },
    // caretColor: ({ theme }) => theme('colors'),
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      // '3xs': '16rem',
      // '2xs': '18rem',
      // xs: '20rem',
      // sm: '24rem',
      // md: '28rem',
      // lg: '32rem',
      // xl: '36rem',
      // '2xl': '42rem',
      // '3xl': '48rem',
      // '4xl': '56rem',
      // '5xl': '64rem',
      // '6xl': '72rem',
      // '7xl': '80rem',
    },
    // container: {},
    // content: {
    //   none: 'none',
    // },
    // contrast: {
    //   0: '0',
    //   50: '.5',
    //   75: '.75',
    //   100: '1',
    //   125: '1.25',
    //   150: '1.5',
    //   200: '2',
    // },
    // cursor: {
    //   auto: 'auto',
    //   default: 'default',
    //   pointer: 'pointer',
    //   wait: 'wait',
    //   text: 'text',
    //   move: 'move',
    //   help: 'help',
    //   'not-allowed': 'not-allowed',
    //   none: 'none',
    //   'context-menu': 'context-menu',
    //   progress: 'progress',
    //   cell: 'cell',
    //   crosshair: 'crosshair',
    //   'vertical-text': 'vertical-text',
    //   alias: 'alias',
    //   copy: 'copy',
    //   'no-drop': 'no-drop',
    //   grab: 'grab',
    //   grabbing: 'grabbing',
    //   'all-scroll': 'all-scroll',
    //   'col-resize': 'col-resize',
    //   'row-resize': 'row-resize',
    //   'n-resize': 'n-resize',
    //   'e-resize': 'e-resize',
    //   's-resize': 's-resize',
    //   'w-resize': 'w-resize',
    //   'ne-resize': 'ne-resize',
    //   'nw-resize': 'nw-resize',
    //   'se-resize': 'se-resize',
    //   'sw-resize': 'sw-resize',
    //   'ew-resize': 'ew-resize',
    //   'ns-resize': 'ns-resize',
    //   'nesw-resize': 'nesw-resize',
    //   'nwse-resize': 'nwse-resize',
    //   'zoom-in': 'zoom-in',
    //   'zoom-out': 'zoom-out',
    // },
    // divideColor: ({ theme }) => theme('borderColor'),
    // divideOpacity: ({ theme }) => theme('borderOpacity'),
    // divideWidth: ({ theme }) => theme('borderWidth'),
    // dropShadow: {
    //   sm: '0 1px 1px rgb(0 0 0 / 0.05)',
    //   DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
    //   md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
    //   lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
    //   xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
    //   '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
    //   none: '0 0 #0000',
    // },
    // fill: ({ theme }) => ({
    //   none: 'none',
    //   ...theme('colors'),
    // }),
    // flex: {
    //   1: '1 1 0%',
    //   auto: '1 1 auto',
    //   initial: '0 1 auto',
    //   none: 'none',
    // },
    // flexBasis: ({ theme }) => ({
    //   auto: 'auto',
    //   ...theme('spacing'),
    //   '1/2': '50%',
    //   '1/3': '33.333333%',
    //   '2/3': '66.666667%',
    //   '1/4': '25%',
    //   '2/4': '50%',
    //   '3/4': '75%',
    //   '1/5': '20%',
    //   '2/5': '40%',
    //   '3/5': '60%',
    //   '4/5': '80%',
    //   '1/6': '16.666667%',
    //   '2/6': '33.333333%',
    //   '3/6': '50%',
    //   '4/6': '66.666667%',
    //   '5/6': '83.333333%',
    //   '1/12': '8.333333%',
    //   '2/12': '16.666667%',
    //   '3/12': '25%',
    //   '4/12': '33.333333%',
    //   '5/12': '41.666667%',
    //   '6/12': '50%',
    //   '7/12': '58.333333%',
    //   '8/12': '66.666667%',
    //   '9/12': '75%',
    //   '10/12': '83.333333%',
    //   '11/12': '91.666667%',
    //   full: '100%',
    // }),
    // flexGrow: {
    //   0: '0',
    //   DEFAULT: '1',
    // },
    // flexShrink: {
    //   0: '0',
    //   DEFAULT: '1',
    // },
    fontFamily: {
      sans: [
        // 'ui-sans-serif',
        // 'system-ui',
        // '-apple-system',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        'Roboto',
        // '"Helvetica Neue"',
        // 'Arial',
        // '"Noto Sans"',
        'sans-serif',
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
        // '"Noto Color Emoji"',
      ],
      'sans-condensed': [
        'Roboto Condensed',
        'sans-serif',
      ],
      // serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        // 'ui-monospace',
        // 'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    // fontSize: {
    //   xs: ['0.75rem', { lineHeight: '1rem' }],
    //   sm: ['0.875rem', { lineHeight: '1.25rem' }],
    //   base: ['1rem', { lineHeight: '1.5rem' }],
    //   lg: ['1.125rem', { lineHeight: '1.75rem' }],
    //   xl: ['1.25rem', { lineHeight: '1.75rem' }],
    //   '2xl': ['1.5rem', { lineHeight: '2rem' }],
    //   '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    //   '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    //   '5xl': ['3rem', { lineHeight: '1' }],
    //   '6xl': ['3.75rem', { lineHeight: '1' }],
    //   '7xl': ['4.5rem', { lineHeight: '1' }],
    //   '8xl': ['6rem', { lineHeight: '1' }],
    //   '9xl': ['8rem', { lineHeight: '1' }],
    // },
    // fontWeight: {
    //   thin: '100',
    //   extralight: '200',
    //   light: '300',
    //   normal: '400',
    //   medium: '500',
    //   semibold: '600',
    //   bold: '700',
    //   extrabold: '800',
    //   black: '900',
    // },
    // gap: ({ theme }) => theme('spacing'),
    // gradientColorStops: ({ theme }) => theme('colors'),
    // gradientColorStopPositions: {
    //   '0%': '0%',
    //   '5%': '5%',
    //   '10%': '10%',
    //   '15%': '15%',
    //   '20%': '20%',
    //   '25%': '25%',
    //   '30%': '30%',
    //   '35%': '35%',
    //   '40%': '40%',
    //   '45%': '45%',
    //   '50%': '50%',
    //   '55%': '55%',
    //   '60%': '60%',
    //   '65%': '65%',
    //   '70%': '70%',
    //   '75%': '75%',
    //   '80%': '80%',
    //   '85%': '85%',
    //   '90%': '90%',
    //   '95%': '95%',
    //   '100%': '100%',
    // },
    // grayscale: {
    //   0: '0',
    //   DEFAULT: '100%',
    // },
    // gridAutoColumns: {
    //   auto: 'auto',
    //   min: 'min-content',
    //   max: 'max-content',
    //   fr: 'minmax(0, 1fr)',
    // },
    // gridAutoRows: {
    //   auto: 'auto',
    //   min: 'min-content',
    //   max: 'max-content',
    //   fr: 'minmax(0, 1fr)',
    // },
    // gridColumn: {
    //   auto: 'auto',
    //   'span-1': 'span 1 / span 1',
    //   'span-2': 'span 2 / span 2',
    //   'span-3': 'span 3 / span 3',
    //   'span-4': 'span 4 / span 4',
    //   'span-5': 'span 5 / span 5',
    //   'span-6': 'span 6 / span 6',
    //   'span-7': 'span 7 / span 7',
    //   'span-8': 'span 8 / span 8',
    //   'span-9': 'span 9 / span 9',
    //   'span-10': 'span 10 / span 10',
    //   'span-11': 'span 11 / span 11',
    //   'span-12': 'span 12 / span 12',
    //   'span-full': '1 / -1',
    // },
    // gridColumnEnd: {
    //   auto: 'auto',
    //   1: '1',
    //   2: '2',
    //   3: '3',
    //   4: '4',
    //   5: '5',
    //   6: '6',
    //   7: '7',
    //   8: '8',
    //   9: '9',
    //   10: '10',
    //   11: '11',
    //   12: '12',
    //   13: '13',
    // },
    // gridColumnStart: {
    //   auto: 'auto',
    //   1: '1',
    //   2: '2',
    //   3: '3',
    //   4: '4',
    //   5: '5',
    //   6: '6',
    //   7: '7',
    //   8: '8',
    //   9: '9',
    //   10: '10',
    //   11: '11',
    //   12: '12',
    //   13: '13',
    // },
    // gridRow: {
    //   auto: 'auto',
    //   'span-1': 'span 1 / span 1',
    //   'span-2': 'span 2 / span 2',
    //   'span-3': 'span 3 / span 3',
    //   'span-4': 'span 4 / span 4',
    //   'span-5': 'span 5 / span 5',
    //   'span-6': 'span 6 / span 6',
    //   'span-full': '1 / -1',
    // },
    // gridRowEnd: {
    //   auto: 'auto',
    //   1: '1',
    //   2: '2',
    //   3: '3',
    //   4: '4',
    //   5: '5',
    //   6: '6',
    //   7: '7',
    // },
    // gridRowStart: {
    //   auto: 'auto',
    //   1: '1',
    //   2: '2',
    //   3: '3',
    //   4: '4',
    //   5: '5',
    //   6: '6',
    //   7: '7',
    // },
    // gridTemplateColumns: {
    //   none: 'none',
    //   1: 'repeat(1, minmax(0, 1fr))',
    //   2: 'repeat(2, minmax(0, 1fr))',
    //   3: 'repeat(3, minmax(0, 1fr))',
    //   4: 'repeat(4, minmax(0, 1fr))',
    //   5: 'repeat(5, minmax(0, 1fr))',
    //   6: 'repeat(6, minmax(0, 1fr))',
    //   7: 'repeat(7, minmax(0, 1fr))',
    //   8: 'repeat(8, minmax(0, 1fr))',
    //   9: 'repeat(9, minmax(0, 1fr))',
    //   10: 'repeat(10, minmax(0, 1fr))',
    //   11: 'repeat(11, minmax(0, 1fr))',
    //   12: 'repeat(12, minmax(0, 1fr))',
    // },
    // gridTemplateRows: {
    //   none: 'none',
    //   1: 'repeat(1, minmax(0, 1fr))',
    //   2: 'repeat(2, minmax(0, 1fr))',
    //   3: 'repeat(3, minmax(0, 1fr))',
    //   4: 'repeat(4, minmax(0, 1fr))',
    //   5: 'repeat(5, minmax(0, 1fr))',
    //   6: 'repeat(6, minmax(0, 1fr))',
    // },
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      // '1/2': '50%',
      // '1/3': '33.333333%',
      // '2/3': '66.666667%',
      // '1/4': '25%',
      // '2/4': '50%',
      // '3/4': '75%',
      // '1/5': '20%',
      // '2/5': '40%',
      // '3/5': '60%',
      // '4/5': '80%',
      // '1/6': '16.666667%',
      // '2/6': '33.333333%',
      // '3/6': '50%',
      // '4/6': '66.666667%',
      // '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    // hueRotate: {
    //   0: '0deg',
    //   15: '15deg',
    //   30: '30deg',
    //   60: '60deg',
    //   90: '90deg',
    //   180: '180deg',
    // },
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('width'),
      // '1/2': '50%',
      // '1/3': '33.333333%',
      // '2/3': '66.666667%',
      // '1/4': '25%',
      // '2/4': '50%',
      // '3/4': '75%',
      // full: '100%',
    }),
    // invert: {
    //   0: '0',
    //   DEFAULT: '100%',
    // },
    // keyframes: {
    //   spin: {
    //     to: {
    //       transform: 'rotate(360deg)',
    //     },
    //   },
    //   ping: {
    //     '75%, 100%': {
    //       transform: 'scale(2)',
    //       opacity: '0',
    //     },
    //   },
    //   pulse: {
    //     '50%': {
    //       opacity: '.5',
    //     },
    //   },
    //   bounce: {
    //     '0%, 100%': {
    //       transform: 'translateY(-25%)',
    //       animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
    //     },
    //     '50%': {
    //       transform: 'none',
    //       animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
    //     },
    //   },
    // },
    // letterSpacing: {
    //   tighter: '-0.05em',
    //   tight: '-0.025em',
    //   normal: '0em',
    //   wide: '0.025em',
    //   wider: '0.05em',
    //   widest: '0.1em',
    // },
    lineHeight: {
      reset: '0',
      // none: '1',
      // tight: '1.25',
      // snug: '1.375',
      // normal: '1.5',
      // relaxed: '1.625',
      // loose: '2',
      // 3: '.75rem',
      // 4: '1rem',
      // 5: '1.25rem',
      // 6: '1.5rem',
      // 7: '1.75rem',
      // 8: '2rem',
      // 9: '2.25rem',
      // 10: '2.5rem',
    },
    // listStyleType: {
    //   none: 'none',
    //   disc: 'disc',
    //   decimal: 'decimal',
    // },
    // listStyleImage: {
    //   none: 'none',
    // },
    // margin: ({ theme }) => ({
    //   auto: 'auto',
    //   ...theme('spacing'),
    // }),
    // lineClamp: {
    //   1: '1',
    //   2: '2',
    //   3: '3',
    //   4: '4',
    //   5: '5',
    //   6: '6',
    // },
    maxHeight: {
      // ...theme('spacing'),
      none: 'none',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      // 0: '0rem',
      // xs: '20rem',
      // sm: '24rem',
      // md: '28rem',
      // lg: '32rem',
      // xl: '36rem',
      // '2xl': '42rem',
      // '3xl': '48rem',
      // '4xl': '56rem',
      // '5xl': '64rem',
      // '6xl': '72rem',
      // '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      // prose: '65ch',
      paragraph: '75ch',
      ...breakpoints(theme('screens')),
    }),
    minHeight: ({ theme }) => ({
      ...theme('spacing'),
      // 0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    minWidth: ({ theme }) => ({
      ...theme('spacing'),
      // 0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    // objectPosition: {
    //   bottom: 'bottom',
    //   center: 'center',
    //   left: 'left',
    //   'left-bottom': 'left bottom',
    //   'left-top': 'left top',
    //   right: 'right',
    //   'right-bottom': 'right bottom',
    //   'right-top': 'right top',
    //   top: 'top',
    // },
    opacity: {
      0: '0',
      // 5: '0.05',
      // 10: '0.1',
      // 20: '0.2',
      // 25: '0.25',
      // 30: '0.3',
      // 40: '0.4',
      // 50: '0.5',
      // 60: '0.6',
      // 70: '0.7',
      // 75: '0.75',
      // 80: '0.8',
      // 90: '0.9',
      // 95: '0.95',
      100: '1',
    },
    order: {
      // first: '-9999',
      // last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    // outlineColor: ({ theme }) => theme('colors'),
    // outlineOffset: {
    //   0: '0px',
    //   1: '1px',
    //   2: '2px',
    //   4: '4px',
    //   8: '8px',
    // },
    // outlineWidth: {
    //   0: '0px',
    //   1: '1px',
    //   2: '2px',
    //   4: '4px',
    //   8: '8px',
    // },
    // padding: ({ theme }) => theme('spacing'),
    // placeholderColor: ({ theme }) => theme('colors'),
    // placeholderOpacity: ({ theme }) => theme('opacity'),
    // ringColor: ({ theme }) => ({
    //   DEFAULT: theme('colors.blue.500', '#3b82f6'),
    //   ...theme('colors'),
    // }),
    // ringOffsetColor: ({ theme }) => theme('colors'),
    // ringOffsetWidth: {
    //   0: '0px',
    //   1: '1px',
    //   2: '2px',
    //   4: '4px',
    //   8: '8px',
    // },
    // ringOpacity: ({ theme }) => ({
    //   DEFAULT: '0.5',
    //   ...theme('opacity'),
    // }),
    // ringWidth: {
    //   DEFAULT: '3px',
    //   0: '0px',
    //   1: '1px',
    //   2: '2px',
    //   4: '4px',
    //   8: '8px',
    // },
    rotate: {
      0: '0deg',
      // 1: '1deg',
      // 2: '2deg',
      // 3: '3deg',
      // 6: '6deg',
      // 12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
      360: '360deg',
    },
    // saturate: {
    //   0: '0',
    //   50: '.5',
    //   100: '1',
    //   150: '1.5',
    //   200: '2',
    // },
    // scale: {
    //   0: '0',
    //   50: '.5',
    //   75: '.75',
    //   90: '.9',
    //   95: '.95',
    //   100: '1',
    //   105: '1.05',
    //   110: '1.1',
    //   125: '1.25',
    //   150: '1.5',
    // },
    // scrollMargin: ({ theme }) => ({
    //   ...theme('spacing'),
    // }),
    // scrollPadding: ({ theme }) => theme('spacing'),
    // sepia: {
    //   0: '0',
    //   DEFAULT: '100%',
    // },
    // skew: {
    //   0: '0deg',
    //   1: '1deg',
    //   2: '2deg',
    //   3: '3deg',
    //   6: '6deg',
    //   12: '12deg',
    // },
    // space: ({ theme }) => ({
    //   ...theme('spacing'),
    // }),
    // stroke: ({ theme }) => ({
    //   none: 'none',
    //   ...theme('colors'),
    // }),
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    },
    // textColor: ({ theme }) => theme('colors'),
    // textDecorationColor: ({ theme }) => theme('colors'),
    // textDecorationThickness: {
    //   auto: 'auto',
    //   'from-font': 'from-font',
    //   0: '0px',
    //   1: '1px',
    //   2: '2px',
    //   4: '4px',
    //   8: '8px',
    // },
    // textIndent: ({ theme }) => ({
    //   ...theme('spacing'),
    // }),
    // textOpacity: ({ theme }) => theme('opacity'),
    // textUnderlineOffset: {
    //   auto: 'auto',
    //   0: '0px',
    //   1: '1px',
    //   2: '2px',
    //   4: '4px',
    //   8: '8px',
    // },
    // transformOrigin: {
    //   center: 'center',
    //   top: 'top',
    //   'top-right': 'top right',
    //   right: 'right',
    //   'bottom-right': 'bottom right',
    //   bottom: 'bottom',
    //   'bottom-left': 'bottom left',
    //   left: 'left',
    //   'top-left': 'top left',
    // },
    // transitionDelay: {
    //   0: '0s',
    //   75: '75ms',
    //   100: '100ms',
    //   150: '150ms',
    //   200: '200ms',
    //   300: '300ms',
    //   500: '500ms',
    //   700: '700ms',
    //   1000: '1000ms',
    // },
    transitionDuration: {
      // DEFAULT: '150ms',
      0: '0s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      text: 'color',
      transform: 'transform',
      'transform-opacity': 'transform, opacity',
    },
    transitionTimingFunction: {
      // due to a bug in TW3 the DEFAULT values are ignored,
      // so tw-ease doesn't work.
      // Created tw-ease-default instead.
      // DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // DEFAULT: 'ease',
      default: 'ease',
      linear: 'linear',
      in: 'ease-in',
      out: 'ease-out',
      'in-out': 'ease-in-out',
      // in: 'cubic-bezier(0.4, 0, 1, 1)',
      // out: 'cubic-bezier(0, 0, 0.2, 1)',
      // 'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: {
      // ...theme('spacing'),
      '1/2': '50%',
      // '1/3': '33.333333%',
      // '2/3': '66.666667%',
      // '1/4': '25%',
      // '2/4': '50%',
      // '3/4': '75%',
      full: '100%',
    },
    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '3/3': '100%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '4/4': '100%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '5/5': '100%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '6/6': '100%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '12/12': '100%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    // willChange: {
    //   auto: 'auto',
    //   scroll: 'scroll-position',
    //   contents: 'contents',
    //   transform: 'transform',
    // },
    zIndex: {
      0: '0',
      // 10: '10',
      // 20: '20',
      // 30: '30',
      // 40: '40',
      // 50: '50',
      auto: 'auto',
      navigation: '1',
      notification: '300',
      loading: '250',
      modal: '200',
      tooltip: '100',
      'level-1': '10',
      'level-2': '20',
      'level-3': '30',
    },
    typography: theme => ({
      h1: { fontSize: '35px', lineHeight: '40px', fontWeight: 400 },
      h2: { fontSize: '25px', lineHeight: '35px', fontWeight: 300 },
      h3: { fontSize: '20px', lineHeight: '30px', fontWeight: 500 },
      h4: { fontSize: '18px', lineHeight: '24px', fontWeight: 300 },
      h5: { fontSize: '16px', lineHeight: '26px', fontWeight: 500 },
      h6: {
        fontSize: '14px', lineHeight: '24px', fontWeight: 500, textTransform: 'uppercase',
      },
      'body-text': { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
      'body-strong': { fontSize: '16px', lineHeight: '24px', fontWeight: 700 },
      'body-condensed': {
        fontSize: '16px', lineHeight: '24px', fontWeight: 400, fontFamily: theme('fontFamily.sans-condensed').join(', '),
      },
      'small-text': { fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
      'small-strong': { fontSize: '14px', lineHeight: '20px', fontWeight: 700 },
      'mini-header': {
        fontSize: '14px', lineHeight: '20px', fontWeight: 400, color: theme('textColor.gray.5'), textTransform: 'uppercase',
      },
      'caption-text': {
        fontSize: '14px', lineHeight: '20px', fontWeight: 400, color: theme('textColor.gray.5'),
      },
      'input-label': {
        fontSize: '14px', lineHeight: '20px', fontWeight: 700, color: theme('textColor.gray.3'),
      },
      'table-header': {
        fontSize: '14px', lineHeight: '20px', fontWeight: 700, color: theme('textColor.gray.5'),
      },
      'btn-text': { fontSize: '16px', lineHeight: '22px', fontWeight: 400 },
      'flags-text': { fontSize: '12px', lineHeight: '20px', fontWeight: 400 },
      'help-text': { fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
    }),
  },
  corePlugins: {
    // https://github.com/tailwindlabs/tailwindcss/blob/v3.3.3/src/corePlugins.js
    preflight: false, // we have our own reset/normalize process

    container: true,

    accessibility: true,
    pointerEvents: true,
    visibility: true,

    position: true,
    inset: true,

    isolation: true,
    zIndex: true,
    order: true,

    gridColumn: true,
    gridColumnStart: true,
    gridColumnEnd: true,
    gridRow: true,
    gridRowStart: true,
    gridRowEnd: true,

    float: false, // we don't use floats
    clear: false, // we don't use floats

    margin: true,
    boxSizing: true,
    lineClamp: true,
    display: true,

    aspectRatio: true,

    height: true,
    maxHeight: true,
    minHeight: true,
    width: true,
    minWidth: true,
    maxWidth: true,

    flex: true,
    flexShrink: true,
    flexGrow: true,
    flexBasis: true,

    tableLayout: true,
    captionSide: true,
    borderCollapse: true,
    borderSpacing: true,

    transformOrigin: true,
    translate: true,
    rotate: true,
    skew: true,
    scale: true,
    transform: true,

    animation: false, // we don't use built-in animations

    cursor: true,
    touchAction: true,
    userSelect: true,
    resize: true,

    scrollSnapType: true,
    scrollSnapAlign: true,
    scrollSnapStop: true,
    scrollMargin: true,

    listStylePosition: true,
    listStyleType: true,
    listStyleImage: true,

    appearance: false, // we build custom components

    columns: true,
    breakBefore: true,
    breakInside: true,
    breakAfter: true,

    gridAutoColumns: false, // we don't use CSS grid
    gridAutoFlow: false, // we don't use CSS grid
    gridAutoRows: false, // we don't use CSS grid
    gridTemplateColumns: false, // we don't use CSS grid
    gridTemplateRows: false, // we don't use CSS grid

    flexDirection: true,
    flexWrap: true,
    placeContent: true,
    placeItems: true,
    alignContent: true,
    alignItems: true,
    justifyContent: true,
    justifyItems: true,

    gap: false, // we don't use CSS grid

    space: false, // it's going against BEM
    divideWidth: false, // it's going against BEM
    divideStyle: false, // it's going against BEM
    divideColor: false, // it's going against BEM
    divideOpacity: false, // it's going against BEM

    placeSelf: true,
    alignSelf: true,
    justifySelf: true,

    overflow: true,
    overscrollBehavior: true,
    scrollBehavior: true,
    textOverflow: true,
    hyphens: true,
    whitespace: true,
    wordBreak: true,

    borderRadius: true,
    borderWidth: true,
    borderStyle: true,
    borderColor: true,
    borderOpacity: true,

    backgroundColor: true,
    backgroundOpacity: true,
    backgroundImage: true,
    gradientColorStops: true,
    boxDecorationBreak: true,
    backgroundSize: true,
    backgroundAttachment: true,
    backgroundClip: true,
    backgroundPosition: true,
    backgroundRepeat: true,
    backgroundOrigin: true,

    fill: true,
    stroke: true,
    strokeWidth: true,

    objectFit: true,
    objectPosition: true,

    padding: true,

    textAlign: true,
    textIndent: true,
    verticalAlign: true,
    fontFamily: true,
    fontSize: false, // we have custom typography
    fontWeight: false, // we have custom typography
    textTransform: true,
    fontStyle: false, // we have custom typography
    fontVariantNumeric: false, // very rarely used
    lineHeight: true,
    letterSpacing: false, // we have custom typography
    textColor: true,
    textOpacity: true,
    textDecoration: true,
    textDecorationColor: true,
    textDecorationStyle: true,
    textDecorationThickness: true,
    textUnderlineOffset: true,
    fontSmoothing: false, // who needs to change it in components?
    placeholderColor: true,
    placeholderOpacity: true,
    caretColor: true,
    accentColor: true,

    opacity: true,
    backgroundBlendMode: true,
    mixBlendMode: true,
    boxShadow: true,
    boxShadowColor: true,
    outlineStyle: true,
    outlineWidth: true,
    outlineOffset: true,
    outlineColor: true,
    ringWidth: true,
    ringColor: true,
    ringOpacity: true,
    ringOffsetWidth: true,
    ringOffsetColor: true,

    blur: true,
    brightness: true,
    contrast: true,
    dropShadow: true,
    grayscale: true,
    hueRotate: true,
    invert: true,
    saturate: true,
    sepia: true,
    filter: true,

    backdropBlur: true,
    backdropBrightness: true,
    backdropContrast: true,
    backdropGrayscale: true,
    backdropHueRotate: true,
    backdropInvert: true,
    backdropOpacity: true,
    backdropSaturate: true,
    backdropSepia: true,
    backdropFilter: true,

    transitionProperty: true,
    transitionDelay: true,
    transitionDuration: true,
    transitionTimingFunction: true,

    willChange: true,
    content: true,
  },
  plugins: [
    plugin(typographyPlugin),
    plugin(flexboxGridPlugin),
    plugin(stopColorPlugin),
  ],
};

function typographyPlugin({ addUtilities, theme, e }) {
  const typography = theme('typography');
  const newUtilities = {};
  for (const [name, style] of Object.entries(typography)) {
    newUtilities[`.${e(name)}`] = style;
  }
  addUtilities(newUtilities);
}

function flexboxGridPlugin({ addUtilities, theme }) {
  // see https://getbootstrap.com/docs/4.0/layout/grid/ for reference
  const { gutter = 24, numberOfColumns = 12 } = theme('flexboxGrid', {});

  if (gutter % 2 !== 0) {
    throw new Error('Gutter must be divisible by 2');
  }

  if (numberOfColumns <= 0) {
    throw new Error('Number of columns must be a positive number');
  }

  addUtilities({
    '.flex-grid-container': {
      width: '100%',
      paddingRight: theme(`spacing.${gutter / 2}`),
      paddingLeft: theme(`spacing.${gutter / 2}`),
    },
    '.flex-grid': {
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: `-${theme(`spacing.${gutter / 2}`)}`,
      marginLeft: `-${theme(`spacing.${gutter / 2}`)}`,
    },
  });

  const colClasses = [];
  for (let i = 1; i <= numberOfColumns; i++) {
    colClasses.push(`.flex-col-${i}`);
  }

  for (const colClass of ['.flex-col-full', '.flex-col-spread', '.flex-col-auto', ...colClasses]) {
    addUtilities({
      [colClass]: {
        width: '100%',
        padding: theme(`spacing.${gutter / 2}`),
        minHeight: theme('minHeight.1'),
      },
    });
  }

  for (const colClass of ['.flex-col-spread', ...colClasses]) {
    addUtilities({
      [colClass]: {
        maxWidth: '100%',
        flexGrow: 1,
        flexBasis: 0,
      },
    });
  }

  for (let i = 1; i <= numberOfColumns; i++) {
    const percentage = theme(`width.${i}/${numberOfColumns}`);
    addUtilities({
      [`.flex-col-${i}`]: {
        flex: `0 0 ${percentage}`,
        maxWidth: `${percentage}`,
      },
      [`.flex-col-offset-${i}`]: {
        marginLeft: `${percentage}`,
      },
    });
  }

  addUtilities({
    '.flex-col-auto': {
      flex: '0 0 auto',
      maxWidth: 'none',
      width: 'auto',
    },
  });
}

function stopColorPlugin({ matchUtilities, theme }) {
  matchUtilities({
    stop: value => ({
      'stop-color': value,
    }),
  }, {
    values: flattenColorPalette(theme('colors')),
  });
}
