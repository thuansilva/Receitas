const colors = {
  primary: "#FFC529",
  secondary: "#FD7A50",
  white: "#FFFFFF",
  black: "#201F1D",
  gray: "#0B2135",
};

const sizes = {
  // Global
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,
  // font sizes
  h1: 22,
  h2: 18,
  body: 14,
  caption: 12,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
    color: colors.black,
    lineHeight: 26,
    fontFamily: "Gilroy-Medium",
  },
  h2: {
    fontSize: sizes.h2,
    color: colors.black,
    fontFamily: "Gilroy-Medium",
    lineHeight: 21,
  },
  caption: {
    fontSize: sizes.caption,
    fontFamily: "Gilroy-Regular",
  },
  body: {
    fontSize: sizes.body,
    fontFamily: "Gilroy-Medium",
  },
};

export { colors, sizes, fonts };
