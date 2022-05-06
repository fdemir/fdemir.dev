function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: withOpacityValue("--color-primary"),
      secondary: withOpacityValue("--color-secondary"),
      body: withOpacityValue("--color-body-bg"),
      words: withOpacityValue("--color-words"),
      wordsoff: withOpacityValue("--color-words-off"),
      border: withOpacityValue("--color-border"),
    },
    fontFamily: {
      serif: ["Time News Roman"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "10rem",
      },
    },
  },
  plugins: [],
};
