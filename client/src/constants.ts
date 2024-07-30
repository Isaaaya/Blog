export const BASE_URL = 'https://blog.isaaaya.online';

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
      a: {
        props: {
          className: 'underline decoration-dashed underline-offset-4',
        },
      },
      ins: {
        props: {
          className: 'text-underlined underline-offset-4',
        },
      },
      img: {
        props: {
          className: ' mx-auto rounded-lg overflow-hidden',
        },
      },
      iframe: {
        props: {
          className: 'mx-auto',
        },
      },
      code: {
        props: {
          className: 'language-js',
        },
      }
  }};