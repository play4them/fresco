import { useTheme } from "emotion-theming";

function badgeStyles(appearance, intent) {
  const theme = useTheme();

  const intents = {
    default: {
      base: theme.colors.gray[9],
      heavy: theme.colors.gray[9],
      light: theme.colors.gray[3],
      contrast: theme.colors.solid,
    },
    primary: {
      base: theme.colors.intent.primary[6],
      heavy: theme.colors.intent.primary[9],
      light: theme.colors.intent.primary[1],
      contrast: theme.colors.solid,
    },
    success: {
      base: theme.colors.intent.success[7],
      heavy: theme.colors.intent.success[9],
      light: theme.colors.intent.success[2],
      contrast: theme.colors.solid,
    },
    warning: {
      base: theme.colors.intent.warning[6],
      heavy: theme.colors.intent.warning[9],
      light: theme.colors.intent.warning[1],
      contrast: theme.colors.solid,
    },
    danger: {
      base: theme.colors.intent.danger[7],
      heavy: theme.colors.intent.danger[9],
      light: theme.colors.intent.danger[2],
      contrast: theme.colors.solid,
    },
  };

  switch (appearance) {
    case "solid":
      return {
        color: intents[intent].contrast,
        backgroundColor: intents[intent].base,
      };
    case "subtle":
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light,
      };
    default:
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light,
      };
  }
}

export default badgeStyles;
