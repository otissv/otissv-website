/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const theme = {
  font: {
    family: { sans: "Montserrat" },
    size: {
      0: "0px",
      1: "14px",
      2: "16px",
      3: "18px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "50px",
      8: "72px",
    },
  },
  global: {
    html: {
      background: "var(--background-color)",
    },
    body: {
      background: "var(--background-color)",
    },
    a: {
      color: "#fab8d9",
    },
    h1: {
      fontSize: "50px",
    },
  },
  Textbox: {
    appearance: {
      CONTACT_FORM: {
        backgroundColor: "var(--background-color-2)",
        borderBottom: "1px solid #fff",
      },

      SUBSCRIBE: {
        backgroundColor: "#fff",
        color: "#000",
        "&:hover, &:focus, &:active": {
          backgroundColor: "#fff",
        },
      },
    },
  },

  Button: ({ theme: { font } }: any) => ({
    default: {
      fontSize: font.size[3],
    },

    appearance: {
      CTA: {
        color: "#fff",
        background: "var(--cta-background-color)",
        border: "1px solid var(--cta-background-color)",
        fontSize: font.size[5],
        "&:hover, &:active, &:focus": {
          background: "var(--cta-background-hover-color)",
          border: "1px solid var(--cta-background-hover-color)",
        },
      },
    },
  }),
};

export const breakPoints = {
  sm: { min: 640, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280, max: 1535 },
};
