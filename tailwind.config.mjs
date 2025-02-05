export default {
  content: ['./src/components/**/*.res', './src/layouts/**/*.res', './src/*.res'],
  theme: {
    colors: {
      primary: {
        background: 'var(--primary-background)',
        50: 'var(--primary-50)',
        300: 'var(--primary-300)',
        500: 'var(--primary-500)',
        700: 'var(--primary-700)',
        900: 'var(--primary-900)',
      },
    },
    extend: {
      fontSize: {
        display1: ['68px', '96px'],
        display2: ['56px', '78px'],
        heading1: ['48px', '68px'],
        heading2: ['40px', '56px'],
        heading3: ['32px', '44px'],
        heading4: ['24px', '32px'],
        heading5: ['20px', '28px'],
        subheading: ['18px', '26px'],
        paragraph1: ['16px', '24px'],
        paragraph2: ['14px', '22px'],
        label: ['12px', '20px'],
      },
    },

    /* We override the default font-families with our own default prefs  */
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
      serif: [
        'Georgia',
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Roboto Mono',
        'SFMono-Regular',
        'Segoe UI',
        'Courier',
        'monospace',
      ],
    },
  },
  variants: {
    width: ['responsive'],
  },
  plugins: [],
}
