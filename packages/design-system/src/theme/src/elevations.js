import { rgba } from 'polished';

import colors from './colors';

const borderShadowColor = rgba(colors.gray[7], 0.15); // Used to be colors.neutral['80A'] in v3 and down.
const blurryShadowColor = rgba(colors.gray[5], 0.3); // Used to be colors.neutral['50A'] in v3 and down.

/**
 * Elevation styles are applied as box shadows.
 * Available levels: 0, 1, 2, 3, 4.
 */

export default [
  `0 0 0 1px inset ${borderShadowColor}`,
  `0 0 0 1px inset ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
  `0 0 0 1px inset ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
  `0 0 0 1px inset ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
  `0 0 0 1px inset ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`,
];
