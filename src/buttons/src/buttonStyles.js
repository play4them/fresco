function buttonStyles(appearance, intent, theme) {
  const intents = {
    default: {
      base: theme.colors.gray[9],
      heavy: theme.colors.gray[9],
      light: theme.colors.gray[0],
      contrast: "#fff"
    },
    primary: {
      base: theme.colors.blue[4],
      heavy: theme.colors.blue[6],
      light: theme.colors.blue[0],
      contrast: "#fff"
    },
    success: {
      base: theme.colors.green[5],
      heavy: theme.colors.green[7],
      light: theme.colors.green[0],
      contrast: "#fff"
    },
    warning: {
      base: theme.colors.yellow[5],
      heavy: theme.colors.yellow[6],
      light: theme.colors.yellow[0],
      contrast: "#fff"
    },
    danger: {
      base: theme.colors.red[5],
      heavy: theme.colors.red[7],
      light: theme.colors.red[0],
      contrast: "#fff"
    }
  };

  switch (appearance) {
    case "primary":
      return {
        color: intents[intent].contrast,
        backgroundColor: intents[intent].base,
        boxShadow: theme.shadows.elevations[1]
      };
    case "minimal":
      return {
        color: intents[intent].heavy,
        backgroundColor: "transparent"
      };
    default:
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light,
        boxShadow: theme.shadows.elevations[1]
      };
  }
}

export default buttonStyles;
