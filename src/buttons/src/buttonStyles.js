import { rgba } from "polished";

function buttonStyles(appearance, intent, theme) {
  const intents = {
    default: {
      base: theme.colors.gray[8],
      light: theme.colors.gray[0],
      medium: theme.colors.gray[2],
      heavy: theme.colors.gray[9],
      contrast: "#fff"
    },
    primary: {
      base: theme.colors.blue[4],
      light: theme.colors.blue[0],
      medium: theme.colors.blue[1],
      heavy: theme.colors.blue[6],
      contrast: "#fff"
    },
    success: {
      base: theme.colors.green[5],
      light: theme.colors.green[0],
      medium: theme.colors.green[1],
      heavy: theme.colors.green[7],
      contrast: "#fff"
    },
    warning: {
      base: theme.colors.yellow[5],
      light: theme.colors.yellow[0],
      medium: theme.colors.yellow[1],
      heavy: theme.colors.yellow[6],
      contrast: "#fff"
    },
    danger: {
      base: theme.colors.red[5],
      light: theme.colors.red[0],
      medium: theme.colors.red[1],
      heavy: theme.colors.red[7],
      contrast: "#fff"
    }
  };

  switch (appearance) {
    case "primary":
      return {
        color: intents[intent].contrast,
        backgroundColor: intents[intent].base,
        boxShadow: theme.shadows.elevations[1],
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: intents[intent].heavy
        }
      };
    case "minimal":
      return {
        color: intents[intent].heavy,
        backgroundColor: "transparent",
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: rgba(theme.colors.gray[7], 0.1)
        }
      };
    case "subtle":
      return {
        color: intents[intent].heavy,
        backgroundColor: rgba(theme.colors.gray[7], 0.075),
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: rgba(theme.colors.gray[7], 0.15)
        }
      };
    default:
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light,
        boxShadow: theme.shadows.elevations[1],
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: intents[intent].medium
        }
      };
  }
}

export default buttonStyles;
