/** We have two spacing scales for different use cases */

const space = [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48];

/* **************
 * Linear sizing
 * *************/

/**
 * SPACING
 * space.spacing is reserved for component specific use cases that demand more precision
 */
space.spacing = space;

/**
 * LAYOUT
 * space.layout is meant to be used for laying out components and composing pages.
 */
space.layout = [0, 16, 24, 32, 48, 64, 80, 96, 128, 160];

/* **************
 * T-Shirt sizing
 * *************/
space.none = 0;
space.xxs = 4;
space.xs = 8;
space.sm = 12;
space.md = 20;
space.lg = 32;
space.xl = 48;
space.xxl = 96;

export default space;
