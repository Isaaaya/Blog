export const BASE_URL = 'http://localhost:5000';

export const markdownOptions = {
    forceBlock: true,
    overrides: {
      h2: {
        props: {
          className: 'text-2xl font-semibold tracking-wide',
        },
      },
      strong: {
        props: {
          className: 'text-pink-300',
        },
      },
      em: {
        props: {
          className: 'text-yellow-300',
        },
      },
      p: {
        props: {
          className: 'text-lg',
        },
      },
  }};