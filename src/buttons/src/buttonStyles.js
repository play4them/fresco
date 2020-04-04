import { rgba } from "polished";

function buttonStyles(appearance, intent, theme) {
  const intents = {
    default: {
      base: theme.colors.gray[8],
      light: theme.colors.gray[0],
      medium: theme.colors.gray[3],
      heavy: theme.colors.gray[9],
      contrast: "#fff",
    },
    primary: {
      base: theme.colors.intent.primary[6],
      light: theme.colors.intent.primary[0],
      medium: theme.colors.intent.primary[1],
      heavy: theme.colors.intent.primary[9],
      contrast: "#fff",
    },
    success: {
      base: theme.colors.intent.success[7],
      light: theme.colors.intent.success[0],
      medium: theme.colors.intent.success[1],
      heavy: theme.colors.intent.success[9],
      contrast: "#fff",
    },
    warning: {
      base: theme.colors.intent.warning[6],
      light: theme.colors.intent.warning[0],
      medium: theme.colors.intent.warning[1],
      heavy: theme.colors.intent.warning[9],
      contrast: "#fff",
    },
    danger: {
      base: theme.colors.intent.danger[7],
      light: theme.colors.intent.danger[0],
      medium: theme.colors.intent.danger[1],
      heavy: theme.colors.intent.danger[9],
      contrast: "#fff",
    },
  };

  switch (appearance) {
    case "primary":
      return {
        color: intents[intent].contrast,
        backgroundColor: intents[intent].base,
        boxShadow: theme.shadows.elevations[1],
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: intents[intent].heavy,
        },
      };
    case "minimal":
      return {
        color: intents[intent].heavy,
        backgroundColor: "transparent",
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: rgba(theme.colors.gray[7], 0.1),
        },
      };
    case "subtle":
      return {
        color: intents[intent].heavy,
        backgroundColor: rgba(theme.colors.gray[7], 0.075),
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: rgba(theme.colors.gray[7], 0.15),
        },
      };
    default:
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light,
        boxShadow: theme.shadows.elevations[1],
        transition: "background-color 200ms ease-out",
        "&.isHovering": {
          backgroundColor: intents[intent].medium,
        },
      };
  }
}

export default buttonStyles;
